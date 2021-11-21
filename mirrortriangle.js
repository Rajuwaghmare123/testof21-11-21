let n=5;
let string="";
let space="";
space=n-1;
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=space;j++)
    {
        string +=" ";
        
    }
    space--;
    for( j=1;j<=2*i-1;j++)
    {
        string +="*";
    }
    string +="\n";
}
space=1;
for(let i=1;i<=n-1;i++)
{
    for(let j=1;j<=space;j++)
    {
        string +=" ";
        
    }
    space++;
    for( j=1;j<=2 * (n-i)-1;j++)
    {
        string +="*";
    }
    string +="\n";
}
console.log(string);