#include <stdexcept>
#include <functional>
#include <iostream>

class Reptile;
class ReptileEgg;

class Reptile {
public:
    virtual ~Reptile() {}
    virtual ReptileEgg* lay() = 0; // Funcție pur virtuală (interfață)
};

class ReptileEgg {
public:
    // Constructorul primește o funcție care știe să creeze o reptilă
    ReptileEgg(std::function<Reptile* ()> createReptile) 
        : createReptileFunc(createReptile), hatched(false) {}

    Reptile* hatch() {
        if (hatched) {
            throw std::logic_error("Egg already hatched!");
        }
        hatched = true;
        return createReptileFunc(); // Apelăm funcția primită la creare
    }

private:
    std::function<Reptile* ()> createReptileFunc;
    bool hatched;
};

class FireDragon : public Reptile {
public:
    FireDragon() {
        // Constructor FireDragon
    }

    ReptileEgg* lay() override {
        // Aici e magia: folosim o funcție Lambda []() { return new ...; }
        // care îi spune oului cum să facă un nou FireDragon.
        return new ReptileEgg([]() { return new FireDragon(); });
    }
};

#ifndef RunTests
int main() {
    Reptile* fireDragon = new FireDragon();
    ReptileEgg* egg = fireDragon->lay();
    
    // Prima ecloziune - OK
    Reptile* childDragon = egg->hatch();
    std::cout << "Puiul a ieșit din ou!" << std::endl;

    try {
        // A doua ecloziune - Trebuie să arunce eroare
        egg->hatch();
    } catch (const std::logic_error& e) {
        std::cout << "Eroare capturată: " << e.what() << std::endl;
    }

    // Curățenie memorie (pe Linux/NXP am folosi smart pointers, dar aici respectăm structura cerută)
    delete fireDragon;
    delete egg;
    delete childDragon;

    return 0;
}
#endif