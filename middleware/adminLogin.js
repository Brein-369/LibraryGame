const adminLogin = (req,res,next)=>{
    if(req.session.status === "admin"){
        console.log(req.session);
        next()
    }
    else{
        console.log(req.session);
        res.redirect('/failed')
    }
}

module.exports = adminLogin