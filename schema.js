const typeDef = `
    type Curso{
        id: ID!
        titulo: String!
    }
    
    type Query {
        cursos: [Curso]
    }
`
const schama = makeExecutableSchema({
    typeDef 
})



module.exports = schema