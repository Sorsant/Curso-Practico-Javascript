function alturaTrianguloIsoseles(a,b)
{
    return (Math.sqrt((a * a) - ((b * b)/4) ));
}

function alturaIsoseles(a,b,c)
{
   if (a=b || b=c|| c=a) && (a!=b||b!=c ||a!=c)

    {   
    return (Math.sqrt((a * a) - ((b * b)/4) )); 
    }
}