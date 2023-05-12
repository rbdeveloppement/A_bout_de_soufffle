export const cgvs = [{
    id:1,
    grand-un:,
},
{
    id:2,
    grand-deux:,
},
{
    id:3,
    grand-trois:,
},
{
    id:4,
    grand-quatre:,
},
{
    id:5,
    grand-cing:,
},
{
    id:6,
    grand-six:,
},
]
export function findById(id){
    const found = cgvs.find(element => element.id == id);
    return found
}