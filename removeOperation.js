class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total = total+key.charCodeAt(i)            
        }
        return total % this.size
    }

    Set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }            
        }
    }
}
const table = new HashTable(50)
table.Set("name","chaithra")
table.Set("age",20)
table.display()
table.remove("age")
table.display()