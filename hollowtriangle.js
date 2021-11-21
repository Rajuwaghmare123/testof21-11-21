let n = 5;
let string ="";


for (let i = 1; i <= n; i++) 
{
  for (let j = i; j <= n ; j++) 
  {
    string += " ";
  }
  for(j=1;j<=(2*i-1);j++)
  {
      if(i==n || j==1 || j==(2*i-1))
      {
          string +="*";
      }
      else
      {
          string +=" ";
      }
  }
     string +="\n";
}
console.log(string);


