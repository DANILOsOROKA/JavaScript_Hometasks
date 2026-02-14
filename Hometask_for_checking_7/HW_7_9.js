/*Через Array.prototype. створити власний foreach, filter*/
    function Client(id, name, surname , email, phone, order){
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order
        }

    let clients = [
                new Client(1, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'tv', price: 12000 },
                    { title: 'phone', price: 8000 }
                ]),
                new Client(2, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'laptop', price: 25000 },
                    { title: 'phone', price: 8000 },
                    { title: 'phone', price: 8000 }
                ]),
                new Client(3, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'monitor', price: 7000 }
                ]),
                new Client(4, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'keyboard', price: 1500 }
                ]),
                new Client(5, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'mouse', price: 800 }
                ]),
                new Client(6, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'headphones', price: 3000 }
                ]),
                new Client(7, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'tablet', price: 15000 }
                ]),
                new Client(8, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'camera', price: 20000 }
                ]),
                new Client(9, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'printer', price: 6000 },
                    { title: 'laptop', price: 25000 },
                    { title: 'phone', price: 8000 },
                    { title: 'phone', price: 8000 }
                ]),
                new Client(10, 'Dan', 'Soroka', 'danilsorok55@gmail.com', '0505993804', [
                    { title: 'router', price: 2500 }
                ])
            ]

Array.prototype.MyFilterForEach = function(filterCallback, forEachCallback) {
    
    const filteredResult = [];
    
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
            
        if (filterCallback(element, i, this)) {
            filteredResult.push(element);
            forEachCallback(element, i, this);
        }
    }
    
    return filteredResult;
};

console.log(clients)
clients.MyFilterForEach(
    client => client.order.length > 1,
    client => {
        console.log(`Клієнт ${client.id} має ${client.order.length} товарів`);
    }
);