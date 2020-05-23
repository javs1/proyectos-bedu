const calculatorController = {
  index: (req,res,next)=>{
      res.json({error:'Podemos hacer /addition o /minus'})
    },
  addition: (req, res, next)=> {
      const valor1= Number(req.headers.valor1)
      const valor2= Number(req.headers.valor2)
      res.json({
        result: valor1 + valor2
    })
  },
  minus: (req, res, next)=> {
    const valor1= Number(req.headers.valor1)
    const valor2= Number(req.headers.valor2)
    res.json({
      result: valor1 - valor2
  })
 },
 multiply: (req, res, next)=> {
  const valor1= Number(req.headers.valor1)
  const valor2= Number(req.headers.valor2)
  res.json({
    result: valor1 * valor2
 })
 }
}
export default calculatorController