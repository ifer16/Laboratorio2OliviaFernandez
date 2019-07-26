// Funciones para calcular el area de figuras geometricas


// PARA EL CUADRADO

const square = (s) => 
{
return s * s;
};

const rectangle = (b,h) =>
{
return b * h;  
};

const triangule = (b,h) =>
{
return b*h/2;
};

const circle = (r) =>
{
return Math.PI*r*r;
};

const ellipse = (a,b) =>
{
return Math.PI*a * b;
};


module.exports = {
square,
rectangle,
triangule,
circle,
ellipse
}