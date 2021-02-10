class Display {
    constructor() {
        this.container = document.querySelector('.fizzbuzz-display')
        this.state = 0
        this.currentItem = document.getElementById('0')
        this.nextItem = this.createNextItem(1)
    }

    fizzbuzz(n) {
        if (n % 15 === 0 ) {
            return 'fizzbuzz'
        }
        if (n % 3 === 0) {
            return 'fizz'
        }
        if (n % 5 === 0) {
            return 'buzz'
        }
        return n.toString()
    }
    
    createNextItem(n=1) {
        let nextItem = document.createElement('h1')
        nextItem.setAttribute('id', n.toString())
        nextItem.textContent = this.fizzbuzz(n)
        nextItem.style.transition= '1s'
        
        nextItem.style.transform = 'translateX(0px)'
        
        this.container.appendChild(nextItem)
        
        return nextItem
    }
    
    translateItems() {
        this.currentItem.style.transform = 'translateX(-322px)'
        this.currentItem.style.transition = '1s'
        this.nextItem.style.transform = 'translateX(-322px)'

        setTimeout(() => {
            this.container.removeChild(this.currentItem)
            this.nextItem.style.transition= '0s'
            this.nextItem.style.transform = 'translateX(0px)'
            this.updateItems()
        }, 1000);    
    }
    
    updateItems() {
        this.state += 1
        this.currentItem = document.getElementById(this.state.toString())
        let nextState = this.state + 1
        this.nextItem = this.createNextItem(nextState)
    }
    
}

let display = new Display()

const start = document.querySelector('button')

start.addEventListener(
    'click',
    () => {
        display.translateItems()
        setInterval(() => {           
            display.translateItems() 
        }, 1200 );
        start.setAttribute('disabled', 'true')
    }
)