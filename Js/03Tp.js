//Ejercicio 5

class Persona 
{ 
     string nombre;
     int edad;

     void Inicializar()
    {
        Console.Write("Ingrese el nombre:");
        nombre = Console.ReadLine();
        string linea;
        Console.Write("Ingrese la edad:");
        linea = Console.ReadLine();
        edad = int.Parse(linea);
    }

     void Imprimir()
    {
        Console.Write("Nombre:");
        Console.WriteLine(nombre);
        Console.Write("Edad:");
        Console.WriteLine(edad);
    }

     void EsMayorEdad()
    {
        if (edad >= 18)
        {
            Console.Write("Es mayor de edad");
        }
        else
        {
            Console.Write("No es mayor de edad");
        }
        Console.ReadKey();
    }


    void Main(string[] args)
    {
        Persona per1 = new Persona();
        per1.Inicializar();
        per1.Imprimir();
        per1.EsMayorEdad();
    }
