var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
const adminHelpers = require('../helpers/admin-helpers');
var equipmentHelpers = require('../helpers/equipmentHelpers')
const { response } = require('express');
const adminLogin = (req, res, next) => {
  if (req.session.admin) {
    next()
  } else {
    // res.redirect('/admin/login')
   next()
  }
}
/* GET users listing. */

router.get('/', adminLogin, function (req, res, next) {
  let adminData = req.session.admin;

  console.log(req.session.admin, "adminSession");

  res.render('admin/home', { adminData, admin: true })

})



router.get('/kadher', adminLogin, function (req, res, next) {

  productHelpers.getKadherProgress().then((getKadherProgress) => {
    console.log(getKadherProgress);
    res.render('admin/kadher-progress', { getKadherProgress })
  })





})



router.get('/sudheesh', adminLogin, function (req, res, next) {


  productHelpers.getSudheeshProgress().then((progressSudheeshAdmin) => {
    console.log(progressSudheeshAdmin);
    res.render('admin/sudheesh-progress', { progressSudheeshAdmin })

  })








})



router.get('/vibin', adminLogin, function (req, res, next) {

  productHelpers.getVibinProgress().then((progressVibinAdmin) => {
    console.log(progressVibinAdmin);

    res.render('admin/vibin-progress', { progressVibinAdmin })
  })






});


router.get('/abdu', adminLogin, function (req, res, next) {

  productHelpers.getAbduProgress().then((progressAbdu) => {
    console.log(progressAbdu);

    res.render('admin/abdu-progress', { progressAbdu })
  })






})

router.get('/delete-progress-abdu/:id', (req, res) => {
  let abduId = req.params.id
  productHelpers.deleteAbdu(abduId).then((response) => {
    res.redirect('/admin/abdu')
  })
})


router.get('/delete-progress-kavu/:id', (req, res) => {
  let kavuId = req.params.id
  productHelpers.deleteKavu(kavuId).then((response) => {
    res.redirect('/admin/kadher')
  })
})

router.get('/delete-progress-sudheesh/:id', (req, res) => {
  let sudheeshId = req.params.id
  productHelpers.deleteSudheesh(sudheeshId).then((response) => {
    res.redirect('/admin/sudheesh')
  })
})


router.get('/delete-progress-vibin/:id', (req, res) => {
  let vibinId = req.params.id
  productHelpers.deleteVibin(vibinId).then((response) => {
    res.redirect('/admin/vibin')
  })
})


router.get('/delete-progress-datson/:id', (req, res) => {
  let DatsonId = req.params.id
  productHelpers.deleteDatson(DatsonId).then((response) => {
    res.redirect('/admin/datson')
  })
})



router.get('/delete-progress-autoA/:id', (req, res) => {
  let AutoAId = req.params.id
  productHelpers.deleteAutoA(AutoAId).then((response) => {
    res.redirect('/admin/AutoA')
  })
})

router.get('/delete-progress-autoB/:id', (req, res) => {
  let AutoBId = req.params.id
  productHelpers.deleteAutoB(AutoBId).then((response) => {
    res.redirect('/admin/AutoB')
  })
})

router.get('/delete-progress-TsA/:id', (req, res) => {
  let TsAId = req.params.id
  productHelpers.deleteTsA(TsAId).then((response) => {
    res.redirect('/admin/TsA')
  })
})


router.get('/delete-progress-TsB/:id', (req, res) => {
  let TsBId = req.params.id
  productHelpers.deleteTsB(TsBId).then((response) => {
    res.redirect('/admin/TsB')
  })
})

router.get('/delete-progress-Topcorn/:id', (req, res) => {
  let TopcornId = req.params.id
  productHelpers.deleteTopcorn(TopcornId).then((response) => {
    res.redirect('/admin/Topcorn')
  })
})


router.get('/delete-progress-Geo/:id', (req, res) => {
  let GeoId = req.params.id
  productHelpers.deleteGeo(GeoId).then((response) => {
    res.redirect('/admin/GeoMaxTs')
  })
})



router.get('/delete-progress-ComnovA/:id', (req, res) => {
  let ComnovAId = req.params.id
  productHelpers.deleteComnovA(ComnovAId).then((response) => {
    res.redirect('/admin/Comnov-A')
  })
})


router.get('/delete-progress-ComnovB/:id', (req, res) => {
  let ComnovBId = req.params.id
  productHelpers.deleteComnovB(ComnovBId).then((response) => {
    res.redirect('/admin/ComnovB')
  })
})

router.get('/delete-progress-ComnovC/:id', (req, res) => {
  let ComnovCId = req.params.id
  productHelpers.deleteComnovC(ComnovCId).then((response) => {
    res.redirect('/admin/ComnovC')
  })
})


router.get('/delete-progress-Trimble/:id', (req, res) => {
  let TrimbleId = req.params.id
  productHelpers.deleteTrimble(TrimbleId).then((response) => {
    res.redirect('/admin/Trimble')
  })
})


router.get('/delete-progress-EECO/:id', (req, res) => {
  let EECOId = req.params.id
  productHelpers.deleteEECO(EECOId).then((response) => {
    res.redirect('/admin/EECO')
  })
})



router.get('/delete-progress-GlamerNew/:id', (req, res) => {
  let GlamerNewId = req.params.id
  productHelpers.deleteGlamerNew(GlamerNewId).then((response) => {
    res.redirect('/admin/glamer-New')
  })
})

router.get('/delete-progress-GlamerOld/:id', (req, res) => {
  let GlamerOldId = req.params.id
  productHelpers.deleteGlamerOld(GlamerOldId).then((response) => {
    res.redirect('/admin/glamer-Old')
  })
})

router.get('/delete-progress-Activa/:id', (req, res) => {
  let ActivaId = req.params.id
  productHelpers.deleteActiva(ActivaId).then((response) => {
    res.redirect('/admin/Activa')
  })
})

router.get('/delete-progress-Hero/:id', (req, res) => {
  let HeroId = req.params.id
  productHelpers.deleteHero(HeroId).then((response) => {
    res.redirect('/admin/Hero')
  })
})

router.get('/login', (req, res) => {

  if (req.session.adminLoggedIn || req.session.admin) {
    res.redirect('/admin')
  } else {
    res.render('Admin/login', { admin: false })
  }
})
router.get('/wgYryfzIIHtsapZY', adminLogin, (req, res) => {

  res.render('Admin/new-admin', { admin: true })
})




router.post('/wgYryfzIIHtsapZY', adminLogin, (req, res) => {
  adminHelpers.doAdminSignup(req.body).then((response) => {

    res.redirect('/admin')
  })
})
router.post('/login', (req, res) => {

  adminHelpers.doAdminLogin(req.body).then((response) => {

    if (response.astatus) {
      req.session.adminLoggedIn = true
      req.session.admin = response.admin
      res.redirect('/admin')
    } else {

      res.redirect('/')
    }
  })
})

router.get('/logout', adminLogin, (req, res) => {
  req.session.admin = null
  req.session.adminLoggedIn = false
  res.redirect('/')
})


router.get('/add-product-kadher', adminLogin, function (req, res) {
  res.render('admin/add-product-kadher')
})
router.post('/add-product-kadher', (req, res) => {
  console.log(req.body);
  productHelpers.addProductKadher(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/kadher')
  })
})


router.get('/add-product-sudheesh', adminLogin, function (req, res) {
  res.render('admin/add-product-sudheesh')
})
router.post('/add-product-sudheesh', (req, res) => {
  console.log(req.body);
  productHelpers.addProductSudheesh(req.body, (id) => {
    res.redirect('/admin/sudheesh')
  })
})


router.get('/add-product-vibin', adminLogin, function (req, res) {
  res.render('admin/add-product-vibin')
})
router.post('/add-product-vibin', (req, res) => {
  console.log(req.body);
  productHelpers.addProductVibin(req.body, (id) => {
    res.redirect('/admin/vibin')
  })
})


router.get('/add-product-abdu', adminLogin, function (req, res) {
  res.render('admin/add-product-abdu')
})
router.post('/add-product-abdu', (req, res) => {
  console.log(req.body);
  productHelpers.addProductAbdu(req.body, (id) => {
    res.redirect('/admin/abdu')
  })
})



router.get('/edit-abdu/:id',async(req,res)=>{
  let abdu = await productHelpers.getAbduDetails(req.params.id)
  console.log(abdu);
  res.render('admin/edit-abdu',{abdu})
})
router.post('/edit-abdu/:id', (req,res)=>{
    productHelpers.updateAbdu(req.params.id,req.body).then(()=>{
      res.redirect('/admin/abdu')
    })
})





router.get('/edit-kavu/:id',async(req,res)=>{
  let kavu = await productHelpers.getKavuDetails(req.params.id)
  console.log(kavu);
  res.render('admin/edit-kavu',{kavu})
})
router.post('/edit-kavu/:id', (req,res)=>{
  productHelpers.updateKavu(req.params.id,req.body).then(()=>{
    res.redirect('/admin/kadher')
  })
})




router.get('/edit-vibin/:id',async(req,res)=>{
  let vibin = await productHelpers.getVibinDetails(req.params.id)
  console.log(vibin);
  res.render('admin/edit-vibin',{vibin})
})
router.post('/edit-vibin/:id', (req,res)=>{
  productHelpers.updateVibin(req.params.id,req.body).then(()=>{
    res.redirect('/admin/vibin')
  })
})




router.get('/edit-sudheesh/:id',async(req,res)=>{
  let sudheesh = await productHelpers.getSudheeshDetails(req.params.id)
  console.log(sudheesh);
  res.render('admin/edit-sudheesh',{sudheesh})
})
router.post('/edit-sudheesh/:id', (req,res)=>{
  productHelpers.updateSudheesh(req.params.id,req.body).then(()=>{
    res.redirect('/admin/sudheesh')
  })
})



//EQUIPMENTS


router.get('/equipments',(req,res)=>{
  res.render('admin/equipments')
})

router.get('/Comnov-A',(req,res)=>{

  equipmentHelpers.getComnovAProgress().then((ComnovADetails)=>{
    console.log(ComnovADetails);
   
    res.render('admin/Comnov-A',{ComnovADetails})
  }) 

 
})


router.get('/ComnovB', function(req,res,next){
  equipmentHelpers.getComnovBProgress().then((ComnovBDetails)=>{
    console.log(ComnovBDetails);
   
    res.render('admin/Comnov-B',{ComnovBDetails})
  }) 
  

})

router.get('/ComnovC', function(req,res,next){
  equipmentHelpers.getComnovCProgress().then((ComnovCDetails)=>{
    console.log(ComnovCDetails);
   
    res.render('admin/Comnov-C',{ComnovCDetails})
  }) 
  

})


router.get('/Trimble',(req,res)=>{

  equipmentHelpers.getTrimbleProgress().then((TrimbleDetails)=>{
    console.log(TrimbleDetails);
   
    res.render('admin/Trimble',{TrimbleDetails})
  }) 

 
})

router.get('/GeoMaxTs', function(req,res,next){
  equipmentHelpers.getGeoMaxTsrogress().then((GeoMaxTsDetails)=>{
    console.log(GeoMaxTsDetails);
   
    res.render('admin/GeoMaxTs',{GeoMaxTsDetails})
  }) 
  

})



router.get('/TsA', function(req,res,next){
  equipmentHelpers.getTsAProgress().then((TsADetails)=>{
    console.log(TsADetails);
   
    res.render('admin/TsA',{TsADetails})
  }) 
  

})



router.get('/TsB',function(req,res,next){
  equipmentHelpers.getTsBProgress().then((TsBDetails)=>{
    console.log(TsBDetails);
   
    res.render('admin/TsB',{TsBDetails})
  }) 
  

})

router.get('/Topcorn', function(req,res,next){
  equipmentHelpers.getTopcornProgress().then((TopcornDetails)=>{
    console.log(TopcornDetails);
   
    res.render('admin/Topcorn',{TopcornDetails})
  }) 
  

})


router.get('/AutoA', function(req,res,next){
  equipmentHelpers.getAutoAProgress().then((AutoADetails)=>{
    console.log(AutoADetails);
   
    res.render('admin/AutoA',{AutoADetails})
  }) 
  

})

router.get('/AutoB', function(req,res,next){
  equipmentHelpers.getAutoBProgress().then((AutoBDetails)=>{
    console.log(AutoBDetails);
   
    res.render('admin/AutoB',{AutoBDetails})
  }) 
  

})


router.get('/add-progress-trimble', adminLogin, function (req, res) {
  res.render('admin/add-progress-trimble')
})
router.post('/add-progress-trimble', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressTrimble(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/Trimble')
  })
})



router.get('/add-progress-Comnov-A', adminLogin, function (req, res) {
  res.render('admin/add-progress-Comnov-A')
})
router.post('/add-progress-Comnov-A', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressComnovA(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/Comnov-A')
  })
})


router.get('/add-progress-Comnov-B', adminLogin, function (req, res) {
  res.render('admin/add-progress-Comnov-B')
})
router.post('/add-progress-Comnov-B', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressComnovB(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/ComnovB')
  })
})


router.get('/add-progress-Comnov-C', adminLogin, function (req, res) {
  res.render('admin/add-progress-Comnov-C')
})
router.post('/add-progress-Comnov-C', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressComnovC(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/ComnovC')
  })
})




router.get('/add-progress-TsA', adminLogin, function (req, res) {
  res.render('admin/add-progress-TsA')
})
router.post('/add-progress-TsA', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressTsA(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/TsA')
  })
})



router.get('/add-progress-TsB', adminLogin, function (req, res) {
  res.render('admin/add-progress-TsB')
})
router.post('/add-progress-TsB', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressTsB(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/TsB')
  })
})

router.get('/add-progress-GeoMaxTs', adminLogin, function (req, res) {
  res.render('admin/add-progress-GeoMaxTs')
})
router.post('/add-progress-GeoMaxTs', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressGeoMaxTs(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/GeoMaxTs')
  })
})

router.get('/add-progress-AutoA', adminLogin, function (req, res) {
  res.render('admin/add-progress-AutoA')
})
router.post('/add-progress-AutoA', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressAutoA(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/AutoA')
  })
})

router.get('/add-progress-AutoB', adminLogin, function (req, res) {
  res.render('admin/add-progress-AutoB')
})
router.post('/add-progress-AutoB', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressAutoB(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/AutoB')
  })
})



router.get('/add-progress-Topcorn', adminLogin, function (req, res) {
  res.render('admin/add-progress-Topcorn')
})
router.post('/add-progress-Topcorn', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressTopcorn(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/Topcorn')
  })
})


//VEHICLE


router.get('/Vehicle', function(req,res,next){
 
  res.render('admin/Vehicle')
}) 

router.get('/Datson', function(req,res,next){
  equipmentHelpers.getDatsonProgress().then((DatsonDetails)=>{
    console.log(DatsonDetails);
   
    res.render('Admin/Datson',{DatsonDetails})
  }) 
  
})


router.get('/EECO', function(req,res,next){
  equipmentHelpers.getEECOProgress().then((EECODetails)=>{
    console.log(EECODetails);
   
    res.render('Admin/EECO',{EECODetails})
  }) 
  
})

router.get('/glamer-new', function(req,res,next){
  equipmentHelpers.getGlamerNewProgress().then((GlamerNewDetails)=>{
    console.log(GlamerNewDetails);
   
    res.render('Admin/Glamer-new',{GlamerNewDetails})
  }) 
  
})


router.get('/glamer-old', function(req,res,next){
  equipmentHelpers.getGlamerOldProgress().then((GlamerOldDetails)=>{
    console.log(GlamerOldDetails);
   
    res.render('Admin/Glamer-Old',{GlamerOldDetails})
  }) 
  
})

router.get('/Activa', function(req,res,next){
  equipmentHelpers.getActivaProgress().then((ActivaDetails)=>{
    console.log(ActivaDetails);
   
    res.render('Admin/Activa',{ActivaDetails})
  }) 
  
})

router.get('/Hero', function(req,res,next){
  equipmentHelpers.getHeroProgress().then((HeroDetails)=>{
    console.log(HeroDetails);
   
    res.render('Admin/Hero-Delux',{HeroDetails})
  }) 
  
})

router.get('/add-progress-Datson', adminLogin, function (req, res) {
  res.render('admin/add-progress-Datson')
})
router.post('/add-progress-Datson', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressDatson(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/Datson')
  })
})


router.get('/add-progress-EECO', adminLogin, function (req, res) {
  res.render('admin/add-progress-EECO')
})
router.post('/add-progress-EECO', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressEECO(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/EECO')
  })
})

router.get('/add-progress-glamerNew', adminLogin, function (req, res) {
  res.render('admin/add-progress-glamerNew')
})
router.post('/add-progress-glamerNew', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressglamerNew(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/glamer-New')
  })
})



router.get('/add-progress-glamerOld', adminLogin, function (req, res) {
  res.render('admin/add-progress-glamerOld')
})
router.post('/add-progress-glamerOld', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressglamerOld(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/glamer-old')
  })
})

router.get('/add-progress-Activa', adminLogin, function (req, res) {
  res.render('admin/add-progress-Activa')
})
router.post('/add-progress-Activa', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressActiva(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/Activa')
  })
})

router.get('/add-progress-Hero', adminLogin, function (req, res) {
  res.render('admin/add-progress-Hero')
})
router.post('/add-progress-Hero', (req, res) => {
  console.log(req.body);
  equipmentHelpers.addProgressHero(req.body, (id) => {
    console.log(id);
    res.redirect('/admin/Hero')
  })
})
module.exports = router;
