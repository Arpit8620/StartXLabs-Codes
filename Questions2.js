const onlyVal=(L,R) =>{
    return (L^R)%2==0 ?"Even":"Odd";
    // return ((L*(!R))+((!L)*R))%2==0?"Even":"Odd";
}

let testcases = prompt("Enter The Number of TestCases");

for(let x=0;x<testcases;x++)
{
    let L=prompt("Enter The L");
    let R=prompt("Enter The R");
    console.log(onlyVal(L,R));
}
