const onlyVal = (totalstrings,array) =>{
    for(let i=0;i<totalstrings-1;i++)
    {
        for(let j=0;j<totalstrings-i-1;j++)
        {
            if(array[j].charCodeAt(0)-array[j+1].charCodeAt(0)>0)
            {
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    console.log("After Sorting");
    for(let a in array)
    {
        console.log(array[a]);
    }
}

let totalstrings=prompt("Enter The Number Of Strings");

let array=[];
for(let d=0;d<totalstrings;d++)
{
    let val=prompt("Enter the String");
    array.push(val);
}

onlyVal(totalstrings,array);