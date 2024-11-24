console.log('x');
let result = document.getElementById("result");
let trueResult = 0;
let list = new Array();

function setNumber(x)
{
    if(Number(result.textContent) == 0)
    {
        result.textContent = x;
        trueResult = Number(x);
    }
    else
    {
        result.textContent = result.textContent + x;
        trueResult = Number(result.textContent);
    }
}

function deleteResult(){
    result.textContent = 0;
}

function negation()
{
    result.textContent = Number(result.textContent) * -1;
}

function addComma()
{
    if(!result.textContent.includes(','))
    {   
        result.textContent = result.textContent + ',';
    }
}

function add(x)
{

    list.push(trueResult);
    console.log(list);
    if(result.textContent.at(result.textContent.length -1) == "+ ")
    {   
        let sumResult = 0;
        for(let i = 0; i>list.length; i++)
        {
            sumResult += Number(list.at(i));
        }
        console.log(sumResult);
        result.textContent = sumResult;
        return;
    }
    
    result.textContent = result.textContent + ' + ';
}

