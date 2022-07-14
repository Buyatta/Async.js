function dowhendataReceived(value) {
    returnNextElement.next(value)
}

function* createFlow() {
    const data = yield fetch('www.twitter.com/buyatta/1')
    console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next()
futureData.then(dowhendataReceived)
 






/*function* createFlow() {
  const num = 10;
  const newnum = yield num;
  yield 5 + newnum;
  yield 6;
}
const returnNextElement = createFlow();
const element1 = returnNextElement.next();

function* createFlow() {
    yield 4
    yield 5
    yield 6
}
const returnNextElement = createFlow()
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()

function createFlow(array) {
    let i = 0;
    const inner = {
        next:
            function () {
                const element = array[i]
                i++
                return element
            }
        
    }
    return inner
}

const nextElement = createFlow([4, 5, 6]);
const element1 = nextElement();
const element2 = nextElement();



/function createFunction(array) {
    let i = 0;
    function inner() {
        const Element = array[i];
        i++
        return Element
    }
    return inner
}

//const nextElement = createFunction([4, 5, 6])
//const element1 = nextElement()
//const element2 = nextElement()*/
