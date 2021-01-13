/*
    Operator in JS

        A. Arthimetic Ope

                +
                -
                *
                /
                % (module)
        
        B. Assinment Ope
                 =
                 +=
                 -=
                 *=
                 /=
                 %=
        
        C. Inc/Dec

                ++
                --
            
        D. Comparession

            ==
            <
            >
            <=
            >=
            !=
            ===

        E. Logical Ope

            AND         &&

            OR          ||

            Is Not      !
  
            

    Conditional Statement

    1. if
    2. if .... else
    3. if .... else if ..... else if ..... else
    4. switch ..... case
*/
/*
var a = 7;
if(a == 1)
{
    console.log("indore");
}
else if(a == 2)
{
    console.log("ujjain");
}
else if(a == 3)
{
    console.log("mumbai");
}
else if(a == 4)
{
    console.log("pune");
}
else{
    console.log("no city found");
}
*/

var a = 700;
switch(a)
{
    case 100 : console.log("indore");
                break;
    
    case 200 : console.log("ujjain");
                break;
    
    case 300 : console.log("mumbai");
                break;
    
    case 400 : console.log("pune");
                break;

    default : console.log("no city found");
}
