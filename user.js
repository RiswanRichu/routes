const { response } = require('express');
const e = require('express');
var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')
var equipmentHelpers = require('../helpers/equipmentHelpers')
const userHelpers = require('../helpers/user-helpers')
const verifyLogin = (req, res, next) => {
 
  if (req.session.userloggedIn) {
       
    next()
  } else {
   // res.redirect('/login')
   next()   
  }
}


/* GET home page. */
router.get('/',verifyLogin, async function (req, res, next) {

  let user = req.session.user;





    res.render('user/view-products', { user})


});
router.get('/login', (req, res) => {
  if (req.session.user) {
    res.redirect('/')
  } else {
    res.render('User/login', { loginErr: req.session.userLoginErr })
    req.session.userLoginErr = false;
  }

})

router.get('/signup',verifyLogin, (req, res) => {
  res.render('User/signup')
})

router.post('/signup',verifyLogin, (req, res) => {
  userHelpers.doSignup(req.body).then((response) => {
    req.session.user = response
    req.session.userloggedIn = true;
    
    res.redirect('/')
  })
})

router.post('/login', (req, res) => {
  userHelpers.doLogin(req.body).then((response) => {
    if (response.status) {
    
     req.session.user = response.user
      req.session.userloggedIn = true
      res.redirect('/')
    } else {
      req.session.userLoginErr = true
      res.redirect('/login')
    }
  })
})

router.get('/logout', (req, res) => {
  req.session.user = null
  req.session.userLoggedIn = false
  res.redirect('/')
})








router.get('/jubnhvxncskdmrfnb',verifyLogin, function(req,res,next){
  productHelper.getKadherProgress().then((getKadherProgress)=>{
    console.log(getKadherProgress);
    res.render('user/kadher-progress',{getKadherProgress})
  })
  
 })  


router.get('/njxccsjjjvdshcnxj',verifyLogin, function(req,res,next){
 
  productHelper.getVibinProgress().then((progressVibin)=>{
    console.log(progressVibin);
   
    res.render('user/vibin-Progress',{progressVibin})
  }) 
 
    
  })
  


router.get('/vhbjsfchdjjdhcfnbjshdb',verifyLogin, function(req,res,next){
  
    productHelper.getSudheeshProgress().then((progressSudheesh)=>{
      console.log(progressSudheesh);
      res.render('user/sudheesh-Progress',{progressSudheesh})

  }) 
 
 
})


router.get('/djbvcbvjwehewfjnv',verifyLogin, function(req,res,next){
  productHelper.getAbduProgress().then((progressAbdu)=>{
    console.log(progressAbdu);
   
    res.render('user/abdu-Progress',{progressAbdu})
  }) 
 
})


router.get('/equipments',function(req,res,next){
  res.render('user/Equipments')
})













router.get('/Trimble', verifyLogin,function(req,res,next){
  equipmentHelpers.getTrimbleProgress().then((trimbleDetails)=>{
    console.log(trimbleDetails);
   
    res.render('user/Trimble',{trimbleDetails})
  }) 
  

})















router.get('/ComnovA', verifyLogin,function(req,res,next){
  equipmentHelpers.getComnovAProgress().then((ComnovADetails)=>{
    console.log(ComnovADetails);
   
    res.render('user/Comnov-A',{ComnovADetails})
  }) 
  

})













router.get('/ComnovB', verifyLogin,function(req,res,next){
  equipmentHelpers.getComnovBProgress().then((ComnovBDetails)=>{
    console.log(ComnovBDetails);
   
    res.render('user/Comnov-B',{ComnovBDetails})
  }) 
  

})

router.get('/ComnovC', verifyLogin,function(req,res,next){
  equipmentHelpers.getComnovCProgress().then((ComnovCDetails)=>{
    console.log(ComnovCDetails);
   
    res.render('user/Comnov-C',{ComnovCDetails})
  }) 
  

})








router.get('/	GeoMaxTs', verifyLogin,function(req,res,next){
  equipmentHelpers.getTrimbleProgress().then((trimbleDetails)=>{
    console.log(trimbleDetails);
   
    res.render('user/GeoMaxTs',{trimbleDetails})
  }) 
  

})



router.get('/TsA', verifyLogin,function(req,res,next){
  equipmentHelpers.getTsAProgress().then((TsADetails)=>{
    console.log(TsADetails);
   
    res.render('user/TsA',{TsADetails})
  }) 
  

})



router.get('/TsB', verifyLogin,function(req,res,next){
  equipmentHelpers.getTsBProgress().then((TsBDetails)=>{
    console.log(TsBDetails);
   
    res.render('user/TsB',{TsBDetails})
  }) 
  

})




router.get('/Trimble', verifyLogin,function(req,res,next){
  equipmentHelpers.getTrimbleProgress().then((trimbleDetails)=>{
    console.log(trimbleDetails);
   
    res.render('user/Trimble',{trimbleDetails})
  }) 
  

})


router.get('/Topcorn', function(req,res,next){
  equipmentHelpers.getTopcornProgress().then((TopcornDetails)=>{
    console.log(TopcornDetails);
   
    res.render('user/Topcorn',{TopcornDetails})
  }) 
  

})

router.get('/AutoA', function(req,res,next){
  equipmentHelpers.getAutoAProgress().then((AutoADetails)=>{
    console.log(AutoADetails);
   
    res.render('user/AutoA',{AutoADetails})
  }) 
  

})



router.get('/AutoB', function(req,res,next){
  equipmentHelpers.getAutoBProgress().then((AutoBDetails)=>{
    console.log(AutoBDetails);
   
    res.render('user/AutoB',{AutoBDetails})
  }) 
  

})



router.get('/Vehicle', function(req,res,next){
 
    res.render('user/Vehicle')
  }) 
  
  router.get('/Datson', function(req,res,next){
    equipmentHelpers.getDatsonProgress().then((DatsonDetails)=>{
      console.log(DatsonDetails);
     
      res.render('user/Datson',{DatsonDetails})
    }) 
    
  
  })

  router.get('/EECO', function(req,res,next){
    equipmentHelpers.getEECOProgress().then((EECODetails)=>{
      console.log(EECODetails);
     
      res.render('user/EECO',{EECODetails})
    }) 
    
  })
  

  router.get('/glamer-new', function(req,res,next){
    equipmentHelpers.getGlamerNewProgress().then((GlamerNewDetails)=>{
      console.log(GlamerNewDetails);
     
      res.render('user/Glamer-new',{GlamerNewDetails})
    }) 
    
  })
  
  
  router.get('/glamer-old', function(req,res,next){
    equipmentHelpers.getGlamerOldProgress().then((GlamerOldDetails)=>{
      console.log(GlamerOldDetails);
     
      res.render('user/Glamer-Old',{GlamerOldDetails})
    }) 
    
  })


  
router.get('/Activa', function(req,res,next){
  equipmentHelpers.getActivaProgress().then((ActivaDetails)=>{
    console.log(ActivaDetails);
   
    res.render('user/Activa',{ActivaDetails})
  }) 
  
})


router.get('/Hero', function(req,res,next){
  equipmentHelpers.getHeroProgress().then((HeroDetails)=>{
    console.log(HeroDetails);
   
    res.render('user/Hero-Delux',{HeroDetails})
  }) 
  
})

module.exports = router;
