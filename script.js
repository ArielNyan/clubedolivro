import van from "vanjs-core"

const {div, p, a, img} = van.tags


//p1 e p2 são respectivamente o mes e o titulo/autor
const Livros = ({imagem, p1, p2}) => div(
  img({imagem}),
  p({p1}),
  p({p2}),
  a("(COMPRE AQUI)")
)



