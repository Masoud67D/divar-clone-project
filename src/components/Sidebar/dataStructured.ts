import HouseOutlined from "@material-ui/icons/HouseOutlined"
import Car from "@material-ui/icons/DriveEtaOutlined"
import SmartPhone from "@material-ui/icons/SmartphoneOutlined"
import Furniture from "@material-ui/icons/WeekendOutlined"
import Build from "@material-ui/icons/BuildOutlined"
import Watch from "@material-ui/icons/WatchOutlined"
import Dice from "@material-ui/icons/CasinoOutlined"
import People from "@material-ui/icons/People"
import Work from "@material-ui/icons/WorkOutline"
import Business from "@material-ui/icons/BusinessCenter"

enum TopLevelPersianTexts {
  "real-estate" = "املاک",
  "vehicles" = "وسایل نقلیه",
  "electronic-devices" = "لوازم الکترونیکی",
  "home-and-kitchen" = "مربوط به خانه",
  "services" = "خدمات",
  "personal-goods" = "وسایل شخصی",
  "entertainment" = "سرگرمی و فراغت",
  "social-services" = "اجتماعی",
  "businesses" = "برای کسب و کار",
  "jobs" = "استخدام و کاریابی"
}

enum level2PersianTexts {
  "buy-residential" = "فروش مسکونی",
  "rent-residential" = "اجاره مسکونی",
  "buy-commercial-property" = "فروش اداری و تجاری",
  "rent-commercial-property" = "اجاره اداری و تجاری", 
  "rent-temporary" = "اجاره کوتاه مدت", 
  "real-estate-services" = "پروژه‌های ساخت و ساز",

  "auto" = "خودرو", 
  "car-accessories" = "قطعات یدکی و لوازم جانبی خودرو", 
  "motorcycles" = "موتورسیکلت و لوازم جانبی", 
  "boat" = "قایق و لوازم جانبی",

  "mobile-tablet" = "موبایل و تبلت", 
  "computers" = "رایانه", 
  "game-consoles" = "کنسول، بازی ویدئویی و آنلاین", 
  "video-audio-device" = "صوتی و تصویری", 
  "telephone" = "تلفن رومیزی",

  "home-decor-furniture" = "وسایل و تزئینات خانه", 
  "kitchen-appliances" = "وسایل آشپزخانه", 
  "home-appliances" = "ابزار", 
  "building-garden" = "ساختمان و حیاط",

  "vehicles-services" = "موتور و ماشین", 
  "catering-services" = "پذیرایی/مراسم", 
  "technology-services" = "خدمات رایانه‌ای و موبایل", 
  "financial-services" = "مالی/حسابداری/بیمه", 
  "transport-logistic-services" = "حمل و نقل", 
  "craft-skill-services" = "پیشه و مهارت", 
  "beauty-services" = "آرایشگری و زیبایی", 
  "entertaining-services" = "سرگرمی", 
  "cleaning-services" = "نظافت", 
  "gardening-services" = "باغبانی و درختکاری", 
  "teaching-services" = "آموزشی",

  "apparel" = "کیف، کفش و لباس", 
  "accessories" = "تزئینی", 
  "beauty-and-personal-care" = "آرایشی، بهداشتی و درمانی", 
  "child-apparel" = "کفش و لباس بچه", 
  "child-products" = "وسایل بچه و اسباب بازی", 
  "stationery" = "لوازم التحریر",

  "ticket" = "بلیط", 
  "tours" = "تور و چارتر", 
  "publication" = "کتاب و مجله", 
  "bike-skate-scooter" = "دوچرخه/اسکیت/اسکوتر", 
  "pets-animals" = "حیوانات", 
  "collecting" = "کلکسیون و سرگرمی", 
  "musical-instruments" = "آلات موسیقی", 
  "sport-entertainment" = "ورزش و تناسب اندام", 
  "game-and-toys" = "اسباب بازی",

  "event" = "رویداد", 
  "voluntary" = "داوطلبانه", 
  "missing" = "گم شده‌ها",

  "business-equipment" = "تجهیزات و ماشین‌آلات", 
  "wholesale" = "عمده فروشی",

  "administrative-jobs" = "اداری و مدیریت", 
  "janitorial-jobs" = "سرایداری و نظافت", 
  "architect-jobs" = "معماری، عمران و ساختمانی", 
  "service-jobs" = "خدمات فروشگاه و رستوران", 
  "it-computer-jobs" = "رایانه و فناوری اطلاعات", 
  "finance-legal-jobs" = "مالی و حسابداری و حقوقی", 
  "marketing-jobs" = "بازاریابی و فروش", 
  "technical-jobs" = "صنعتی و فنی و مهندسی", 
  "teaching-jobs" = "آموزشی", 
  "transport-delivery-jobs" = "حمل و نقل", 
  "health-beauty-jobs" = "درمانی و زیبایی و بهداشتی", 
  "art-media-jobs" = "هنری و رسانه"
}

export enum Level3PersianTexts {
  "buy-apartment" = "آپارتمان",
  "buy-villa" = "خانه و ویلا",
  "buy-old-house" = "زمین و کلنگی",

  "rent-apartment" = "آپارتمان",
  "rent-villa" = "خانه و ویلا",

  "buy-office" = "دفتر کار، اتاق اداری و مطب",
  "buy-store" = "مغازه و غرفه",
  "buy-industrial-agricultural-property" = "صنعتی، کشاورزی و تجاری",

  "rent-office" = "دفتر کار، اتاق اداری و مطب",
  "rent-store" = "مغازه و غرفه",
  "rent-industrial-agricultural-property" = "صنعتی، کشاورزی و تجاری",

  "rent-temporary-suite-apartment" = "آپارتمان و سوئیت",
  "rent-temporary-villa" = "ویلا و باغ",
  "rent-temporary-workspace" = "دفتر کار و فضای آموزشی",

  "contribution-construction" = "مشارکت در ساخت",
  "pre-sell-home" = "پیش فروش",

  "car" = "سواری",
  "classic-car" = "کلاسیک",
  "rental-car" = "اجاره‌ای",
  "heavy-car" = "سنگین",

  "mobile-phones" = "گوشی موبایل",
  "tablet" = "تبلت",
  "mobile-tablet-accessories" = "لوازم جانبی موبایل و تبلت",
  "sim-card" = "سیم کارت",

  "laptop-notebook-macbook" = "رایانه همراه",
  "desktop-computers" = "رایانه رومیزی",
  "computer-parts-accessories" = "قطعات و لوازم جانبی",
  "modem-network-equipments" = "مودم و تجهیزات شبکه",
  "printer-scanner-fax" = "پرینتر/اسکنر/کپی/فکس",

  "film-music" = "فیلم و موسیقی",
  "camera" = "دوربین عکاسی و فیلمبرداری",
  "headphone-speaker-microphone" = "پخش کننده همراه",
  "home-audio-system" = "سیستم صوتی خانگی",
  "dvd-bluray-player" = "ویدئو و پخش کننده DVD",
  "tv-projector" = "تلویزیون و پروژکتور",
  "cctv" = "دوربین مداربسته",

  "art-decorative" = "تزئینی و آثار هنری",
  "lighting" = "لوازم روشنایی",
  "table-desk-chair" = "میز و صندلی",
  "carpets" = "فرش و گلیم",
  "closet-storage" = "کمد و بوفه",
  "curtain-tablecloth" = "پرده و رومیزی",
  "bedroom-accessories" = "تخت و اتاق خواب",
  "sofa-armchair" = "مبلمان و صندلی راحتی",
  "tv-stand" = "میز تلویزیون و وسایل سیستم پخش",

  "dishwasher" = "ماشین ظرفشویی", 
  "refrigerator-freezer" = "یخچال و فریزر", 
  "kitchen-accessories" = "وسایل آشپزی و غذاخوری", 
  "microwave-stove" = "مایکروویو و گاز", 
  "washing-machine" = "ماشین لباسشویی و خشک کننده",
        
  "vacuum-cleaner-sewing-machine-iron" = "نظافت و خیاطی و اتو",
  "power-and-hand-tools" = "تعمیرات",
  
  "bathroom-fixtures" = "سرویس بهداشتی و سونا",
  "heating-cooling-systems" = "سیستم گرمایشی سرمایشی و گاز",
  "kitchen-equipments" = "آشپزخانه",
  "patio-balcony" = "حیاط و ایوان",
  "garden-tools" = "ابزار باغبانی",    
       
  "domain-services" = "فروش دامنه و سایت",
  "website-services" = "میزبانی و طراحی سایت",
  "internet-services" = "خدمات پهنای باند اینترنت",
  "computer-services" = "خدمات نرم افزار و سخت افزار کامپیوتر",
  "mobile-services" = "تعمیرات نرم‌افزار و سخت‌افزار گوشی موبایل",
 
  "foreign-language" = "زبان خارجی",
  "educational-teaching" = "دروس مدرسه و دانشگاه",
  "software-teaching" = "نرم افزار",
  "art-teaching" = "هنری",
  "sports-teaching" = "ورزشی",
  "educational-consulting" = "مشاوره تحصیلی",

  "bag-shoes-belt" = "کیف/کفش/کمربند",
  "clothing" = "لباس",

  "watches" = "ساعت",
  "jewellery" = "جواهرات",
  "trinket" = "بدلیجات",

  "child-toys" = "اسباب بازی",
  "stroller" = "کالسکه و لوازم جانبی",
  "child-furniture" = "صندلی بچه",
  "child-stuff" = "اسباب و اثاث بچه",

  "concert-ticket" = "کنسرت",
  "theatre-cinema-ticket" = "تئاتر و سینما",
  "discount-gift-card" = "کارت هدیه و تخفیف",
  "match-sport-ticket" = "اماکن و مسابقات ورزشی",
  "sport-ticket" = "ورزشی",
  "travel-ticket" = "اتوبوس، مترو و قطار",

  "educational-book" = "آموزشی",
  "literary-book" = "ادبی",
  "historical-book" = "تاریخی",
  "religious-book" = "مذهبی",
  "magazine" = "مجلات",

  "cats" = "گربه",
  "rodents" = "موش و خرگوش",
  "reptiles" = "خزنده",
  "birds" = "پرنده",
  "fishes" = "ماهی",
  "pet-supplies" = "لوازم جانبی",
  "farm-animals" = "حیوانات مزرعه",
  "dogs" = "سگ",

  "stamp-coin-collecting" = "سکه، تمبر و اسکناس",
  "antique-objects" = "اشیای عتیقه",

  "guitars" = "گیتار، بیس و امپلیفایر",
  "wind-instrument" = "سازهای بادی",
  "organ-piano-accordion" = "پیانو/کیبورد/آکاردئون",
  "iranian-instruments" = "سنتی",
  "percussion-instruments" = "درام و پرکاشن",
  "violins" = "ویولن",

  "ball-sports" = "ورزش‌های توپی",
  "mountaineering-camping" = "کوهنوردی و کمپینگ",
  "water-sports" = "غواصی و ورزش‌های آبی",
  "fishing" = "ماهیگیری",
  "sport-equipment" = "تجهیزات ورزشی",
  "winter-sports" = "ورزش‌های زمستانی",
  "horse-riding" = "اسب و تجهیزات اسب سواری",

  "auction" = "حراج",
  "seminars-conference" = "گردهمایی و همایش",
  "events-sports" = "ورزشی",

  "education-research-partner" = "تحقیقاتی",
 
  "lost-animals" = "حیوانات",
  "lost-objects" = "اشیا",

  "store-equipment" = "فروشگاه و مغازه",
  "barber-shop-equipment" = "آرایشگاه و سالن‌های زیبایی",
  "office-equipment" = "دفتر کار",
  "industrial-equipment" = "صنعتی",
  "restaurant-equipment" = "کافی شاپ و رستوران",
  "medical-equipment" = "پزشکی",
}

const { "real-estate": realEstate, vehicles, "electronic-devices": electronicDevices, "home-and-kitchen": homeAndKitchen, services, "personal-goods": personalGoods, entertainment, "social-services": socialServices, businesses, jobs } = TopLevelPersianTexts

export const level3SubCategories = [
  { 
    route: "buy-residential",
    subcategories: 
      [
        { subcategoryRoute: "buy-apartment", subcategoryText: Level3PersianTexts["buy-apartment"] },
        { subcategoryRoute: "buy-villa", subcategoryText: Level3PersianTexts["buy-villa"] },
        { subcategoryRoute: "buy-old-house", subcategoryText: Level3PersianTexts["buy-old-house"] }
      ]
  },
  { 
    route: "rent-residential",
    subcategories: 
      [
        { subcategoryRoute: "rent-apartment", subcategoryText: Level3PersianTexts["rent-apartment"] },
        { subcategoryRoute: "rent-villa", subcategoryText: Level3PersianTexts["rent-villa"] },
      ]    
  },
  { 
    route: "buy-commercial-property",
    subcategories: 
      [
        { subcategoryRoute: "buy-office", subcategoryText: Level3PersianTexts["buy-office"] },
        { subcategoryRoute: "buy-store", subcategoryText: Level3PersianTexts["buy-store"] },
        { subcategoryRoute: "buy-industrial-agricultural-property", subcategoryText: Level3PersianTexts["buy-industrial-agricultural-property"] }
      ] 
  },
  { 
    route: "rent-commercial-property",
    subcategories: 
      [
        { subcategoryRoute: "rent-office", subcategoryText: Level3PersianTexts["rent-office"] },
        { subcategoryRoute: "rent-store", subcategoryText: Level3PersianTexts["rent-store"] },
        { subcategoryRoute: "rent-industrial-agricultural-property", subcategoryText: Level3PersianTexts["rent-industrial-agricultural-property"] }
      ]    
  },
  { 
    route: "rent-temporary",
    subcategories: 
      [
        { subcategoryRoute: "rent-temporary-suite-apartment", subcategoryText: Level3PersianTexts["rent-temporary-suite-apartment"] },
        { subcategoryRoute: "rent-temporary-villa", subcategoryText: Level3PersianTexts["rent-temporary-villa"] },
        { subcategoryRoute: "rent-temporary-workspace", subcategoryText: Level3PersianTexts["rent-temporary-workspace"] }
      ] 
  },
  { 
    route: "real-estate-services",
    subcategories: 
      [
        { subcategoryRoute: "contribution-construction", subcategoryText: Level3PersianTexts["contribution-construction"] },
        { subcategoryRoute: "pre-sell-home", subcategoryText: Level3PersianTexts["pre-sell-home"] },
      ]   
  },


  { 
    route: "auto",
    subcategories: 
      [
        { subcategoryRoute: "car", subcategoryText: Level3PersianTexts.car },
        { subcategoryRoute: "classic-car", subcategoryText: Level3PersianTexts["classic-car"] },
        { subcategoryRoute: "rental-car", subcategoryText: Level3PersianTexts["rental-car"] },
        { subcategoryRoute: "heavy-car", subcategoryText: Level3PersianTexts["heavy-car"] }
      ]
  },
  { 
    route: "car-accessories",
    subcategories: []
  },
  { 
    route: "motorcycles",
    subcategories: []
  },
  { 
    route: "boat",
    subcategories: []
  },


  { 
    route: "mobile-tablet",
    subcategories: 
      [
        { subcategoryRoute: "mobile-phones", subcategoryText: Level3PersianTexts["mobile-phones"] },
        { subcategoryRoute: "tablet", subcategoryText: Level3PersianTexts.tablet },
        { subcategoryRoute: "mobile-tablet-accessories", subcategoryText: Level3PersianTexts["mobile-tablet-accessories"] },
        { subcategoryRoute: "sim-card", subcategoryText: Level3PersianTexts["sim-card"] }
      ]
  },
  { 
    route: "computers",
    subcategories: 
      [
        { subcategoryRoute: "laptop-notebook-macbook", subcategoryText: Level3PersianTexts["laptop-notebook-macbook"] },
        { subcategoryRoute: "desktop-computer", subcategoryText: Level3PersianTexts["desktop-computers"] },
        { subcategoryRoute: "computer-parts-accessories", subcategoryText: Level3PersianTexts["computer-parts-accessories"] },
        { subcategoryRoute: "modem-network-equipments", subcategoryText: Level3PersianTexts["modem-network-equipments"] },
        { subcategoryRoute: "printer-scanner-fax", subcategoryText: Level3PersianTexts["printer-scanner-fax"] }
      ]
  },
  { 
    route: "game-consoles",
    subcategories: []
  },
  { 
    route: "video-audio-device",
    subcategories: 
      [
        { subcategoryRoute: "film-music", subcategoryText: Level3PersianTexts["film-music"] },
        { subcategoryRoute: "camera", subcategoryText: Level3PersianTexts.camera },
        { subcategoryRoute: "headphone-speaker-microphone", subcategoryText: Level3PersianTexts["headphone-speaker-microphone"] },
        { subcategoryRoute: "home-audio-system", subcategoryText: Level3PersianTexts["home-audio-system"] },
        { subcategoryRoute: "dvd-bluray-player", subcategoryText: Level3PersianTexts["dvd-bluray-player"] },
        { subcategoryRoute: "tv-projector", subcategoryText: Level3PersianTexts["tv-projector"] },
        { subcategoryRoute: "cctv", subcategoryText: Level3PersianTexts.cctv },
      ]
  },
  { 
    route: "telephone",
    subcategories: []
  },
  { 
    route: "home-decor-furniture",
    subcategories: 
      [
        { subcategoryRoute: "art-decorative", subcategoryText: Level3PersianTexts["art-decorative"] },
        { subcategoryRoute: "lighting", subcategoryText: Level3PersianTexts.lighting },
        { subcategoryRoute: "table-desk-chair", subcategoryText: Level3PersianTexts["table-desk-chair"] },
        { subcategoryRoute: "carpets", subcategoryText: Level3PersianTexts.carpets },
        { subcategoryRoute: "closet-storage", subcategoryText: Level3PersianTexts["closet-storage"] },
        { subcategoryRoute: "curtain-tablecloth", subcategoryText: Level3PersianTexts["curtain-tablecloth"] },
        { subcategoryRoute: "bedroom-accessories", subcategoryText: Level3PersianTexts["bedroom-accessories"] },
        { subcategoryRoute: "sofa-armchair", subcategoryText: Level3PersianTexts["sofa-armchair"] },
        { subcategoryRoute: "tv-stand", subcategoryText: Level3PersianTexts["tv-stand"] },
      ]
  },
  { 
    route: "kitchen-appliances",
    subcategories: 
      [
        { subcategoryRoute: "dishwasher", subcategoryText: Level3PersianTexts.dishwasher },
        { subcategoryRoute: "refrigerator-freezer", subcategoryText: Level3PersianTexts["refrigerator-freezer"] },
        { subcategoryRoute: "kitchen-accessories", subcategoryText: Level3PersianTexts["kitchen-accessories"] },
        { subcategoryRoute: "microwave-stove", subcategoryText: Level3PersianTexts["microwave-stove"] },
        { subcategoryRoute: "washing-machine", subcategoryText: Level3PersianTexts["washing-machine"] },
      ]
  },
  { 
    route: "home-appliances",
    subcategories: 
      [
        { subcategoryRoute: "vacuum-cleaner-sewing-machine-iron", subcategoryText: Level3PersianTexts["vacuum-cleaner-sewing-machine-iron"] },
        { subcategoryRoute: "power-and-hand-tools", subcategoryText: Level3PersianTexts["power-and-hand-tools"] },
      ]
  },
  { 
    route: "building-garden",
    subcategories: 
      [
        { subcategoryRoute: "bathroom-fixtures", subcategoryText: Level3PersianTexts["bathroom-fixtures"] },
        { subcategoryRoute: "heating-cooling-systems", subcategoryText: Level3PersianTexts["heating-cooling-systems"] },
        { subcategoryRoute: "kitchen-equipments", subcategoryText: Level3PersianTexts["kitchen-equipments"] },
        { subcategoryRoute: "patio-balcony", subcategoryText: Level3PersianTexts["patio-balcony"] },
        { subcategoryRoute: "garden-tools", subcategoryText: Level3PersianTexts["garden-tools"] },
      ]
  },


  { 
    route: "vehicles-services",
    subcategories: []
  },
  { 
    route: "catering-services",
    subcategories: []
  },
  { 
    route: "technology-services",
    subcategories: 
      [
        { subcategoryRoute: "domain-services", subcategoryText: Level3PersianTexts["domain-services"] },
        { subcategoryRoute: "website-services", subcategoryText: Level3PersianTexts["website-services"] },
        { subcategoryRoute: "internet-services", subcategoryText: Level3PersianTexts["internet-services"] },
        { subcategoryRoute: "computer-services", subcategoryText: Level3PersianTexts["computer-services"] },
        { subcategoryRoute: "mobile-services", subcategoryText: Level3PersianTexts["mobile-services"] },
      ]
  },
  { 
    route: "financial-services",
    subcategories: []
  },
  { 
    route: "transport-logistic-services",
    subcategories: []
  },
  { 
    route: "craft-skill-services",
    subcategories: []
  },
  { 
    route: "beauty-services",
    subcategories: []
  },
  { 
    route: "entertaining-services",
    subcategories: []
  },
  { 
    route: "cleaning-services",
    subcategories: []
  },
  { 
    route: "gardening-services",
    subcategories: []
  },
  { 
    route: "teaching-services",
    subcategories: 
      [
        { subcategoryRoute: "foreign-language", subcategoryText: Level3PersianTexts["foreign-language"] },
        { subcategoryRoute: "educational-teaching", subcategoryText: Level3PersianTexts["educational-teaching"] },
        { subcategoryRoute: "software-teaching", subcategoryText: Level3PersianTexts["software-teaching"] },
        { subcategoryRoute: "art-teaching", subcategoryText: Level3PersianTexts["art-teaching"] },
        { subcategoryRoute: "sports-teaching", subcategoryText: Level3PersianTexts["sports-teaching"] },
        { subcategoryRoute: "educational-consulting", subcategoryText: Level3PersianTexts["educational-consulting"] },
      ]
  },



  { 
    route: "apparel",
    subcategories: 
      [
        { subcategoryRoute: "bag-shoes-belt", subcategoryText: Level3PersianTexts["bag-shoes-belt"] },
        { subcategoryRoute: "clothing", subcategoryText: Level3PersianTexts.clothing },
      ]
  },
  { 
    route: "accessories",
    subcategories: 
      [
        { subcategoryRoute: "watches", subcategoryText: Level3PersianTexts.watches },
        { subcategoryRoute: "jewellery", subcategoryText: Level3PersianTexts.jewellery },
        { subcategoryRoute: "trinket", subcategoryText: Level3PersianTexts.trinket },
      ]
  },
  { 
    route: "beauty-and-personal-care",
    subcategories: []
  },
  { 
    route: "child-apparel",
    subcategories: []
  },
  { 
    route: "child-products",
    subcategories: 
      [
        { subcategoryRoute: "child-toys", subcategoryText: Level3PersianTexts["child-toys"] },
        { subcategoryRoute: "stroller", subcategoryText: Level3PersianTexts.stroller },
        { subcategoryRoute: "child-furniture", subcategoryText: Level3PersianTexts["child-furniture"] },
        { subcategoryRoute: "child-stuff", subcategoryText: Level3PersianTexts["child-stuff"] },
      ]
  },
  { 
    route: "stationery",
    subcategories: []
  },



  { 
    route: "ticket",
    subcategories: 
      [
        { subcategoryRoute: "concert-ticket", subcategoryText: Level3PersianTexts["concert-ticket"] },
        { subcategoryRoute: "theatre-cinema-ticket", subcategoryText: Level3PersianTexts["theatre-cinema-ticket"] },
        { subcategoryRoute: "discount-gift-card", subcategoryText: Level3PersianTexts["discount-gift-card"] },
        { subcategoryRoute: "match-sport-ticket", subcategoryText: Level3PersianTexts["match-sport-ticket"] },
        { subcategoryRoute: "sport-ticket", subcategoryText: Level3PersianTexts["sport-ticket"] },
        { subcategoryRoute: "travel-ticket", subcategoryText: Level3PersianTexts["travel-ticket"] },
      ]
  },
  { 
    route: "tours",
    subcategories: []
  },
  { 
    route: "publication",
    subcategories: 
      [
        { subcategoryRoute: "educational-book", subcategoryText: Level3PersianTexts["educational-book"] },
        { subcategoryRoute: "literary-book", subcategoryText: Level3PersianTexts["literary-book"] },
        { subcategoryRoute: "historical-book", subcategoryText: Level3PersianTexts["historical-book"] },
        { subcategoryRoute: "religious-book", subcategoryText: Level3PersianTexts["religious-book"] },
        { subcategoryRoute: "magazine", subcategoryText: Level3PersianTexts.magazine },
      ]
  },
  { 
    route: "bike-skate-scooter",
    subcategories: []
  },
  { 
    route: "pets-animals",
    subcategories: 
      [
        { subcategoryRoute: "cats", subcategoryText: Level3PersianTexts.cats },
        { subcategoryRoute: "rodents", subcategoryText: Level3PersianTexts.rodents },
        { subcategoryRoute: "reptiles", subcategoryText: Level3PersianTexts.reptiles },
        { subcategoryRoute: "birds", subcategoryText: Level3PersianTexts.birds },
        { subcategoryRoute: "fishes", subcategoryText: Level3PersianTexts.fishes },
        { subcategoryRoute: "pet-supplies", subcategoryText: Level3PersianTexts["pet-supplies"] },
        { subcategoryRoute: "farm-animals", subcategoryText: Level3PersianTexts["farm-animals"] },
        { subcategoryRoute: "dogs", subcategoryText: Level3PersianTexts.dogs },
      ]
  },
  { 
    route: "collecting",
    subcategories: 
      [
        { subcategoryRoute: "stamp-coin-collecting", subcategoryText: Level3PersianTexts["stamp-coin-collecting"] },
        { subcategoryRoute: "antique-objects", subcategoryText: Level3PersianTexts["antique-objects"] },
      ]
  },
  { 
    route: "musical-instruments",
    subcategories: 
      [
        { subcategoryRoute: "guitars", subcategoryText: Level3PersianTexts.guitars },
        { subcategoryRoute: "wind-instrument", subcategoryText: Level3PersianTexts["wind-instrument"] },
        { subcategoryRoute: "organ-piano-accordion", subcategoryText: Level3PersianTexts["organ-piano-accordion"] },
        { subcategoryRoute: "iranian-instruments", subcategoryText: Level3PersianTexts["iranian-instruments"] },
        { subcategoryRoute: "percussion-instruments", subcategoryText: Level3PersianTexts["percussion-instruments"] },
        { subcategoryRoute: "violins", subcategoryText: Level3PersianTexts.violins },
      ]
  },
  { 
    route: "sport-entertainment",
    subcategories: 
      [
        { subcategoryRoute: "ball-sports", subcategoryText: Level3PersianTexts["ball-sports"] },
        { subcategoryRoute: "mountaineering-camping", subcategoryText: Level3PersianTexts["mountaineering-camping"] },
        { subcategoryRoute: "water-sports", subcategoryText: Level3PersianTexts["water-sports"] },
        { subcategoryRoute: "fishing", subcategoryText: Level3PersianTexts.fishing },
        { subcategoryRoute: "sport-equipment", subcategoryText: Level3PersianTexts["sport-equipment"] },
        { subcategoryRoute: "winter-sports", subcategoryText: Level3PersianTexts["winter-sports"] },
        { subcategoryRoute: "horse-riding", subcategoryText: Level3PersianTexts["horse-riding"] },
      ]
  },
  { 
    route: "game-and-toys",
    subcategories: []
  },


  { 
    route: "event",
    subcategories: 
      [
        { subcategoryRoute: "auction", subcategoryText: Level3PersianTexts.auction },
        { subcategoryRoute: "seminars-conference", subcategoryText: Level3PersianTexts["seminars-conference"] },
        { subcategoryRoute: "events-sports", subcategoryText: Level3PersianTexts["events-sports"] },
      ]
  },
  { 
    route: "voluntary",
    subcategories: 
      [
        { subcategoryRoute: "education-research-partner", subcategoryText: Level3PersianTexts["education-research-partner"] },
      ]
  },
  { 
    route: "missing",
    subcategories: 
      [
        { subcategoryRoute: "lost-animals", subcategoryText: Level3PersianTexts["lost-animals"] },
        { subcategoryRoute: "lost-objects", subcategoryText: Level3PersianTexts["lost-objects"] },
      ]
  },



  { 
    route: "business-equipment",
    subcategories: 
      [
        { subcategoryRoute: "store-equipment", subcategoryText: Level3PersianTexts["store-equipment"] },
        { subcategoryRoute: "barber-shop-equipment", subcategoryText: Level3PersianTexts["barber-shop-equipment"] },
        { subcategoryRoute: "office-equipment", subcategoryText: Level3PersianTexts["office-equipment"] },
        { subcategoryRoute: "industrial-equipment", subcategoryText: Level3PersianTexts["industrial-equipment"] },
        { subcategoryRoute: "restaurant-equipment", subcategoryText: Level3PersianTexts["restaurant-equipment"] },
        { subcategoryRoute: "medical-equipment", subcategoryText: Level3PersianTexts["medical-equipment"] },
      ]
  },
  { 
    route: "wholesale",
    subcategories: []
  },



  { 
    route: "administrative-jobs",
    subcategories: []
  },
  { 
    route: "janitorial-jobs",
    subcategories: []
  },
  { 
    route: "architect-jobs",
    subcategories: []
  },
  { 
    route: "service-jobs",
    subcategories: []
  },
  { 
    route: "it-computer-jobs",
    subcategories: []
  },
  { 
    route: "finance-legal-jobs",
    subcategories: []
  },
  { 
    route: "marketing-jobs",
    subcategories: []
  },
  { 
    route: "technical-jobs",
    subcategories: []
  },
  { 
    route: "teaching-jobs",
    subcategories: []
  },
  { 
    route: "transport-delivery-jobs",
    subcategories: []
  },
  { 
    route: "health-beauty-jobs",
    subcategories: []
  },
  { 
    route: "art-media-jobs",
    subcategories: []
  },
]

export const level2SubCategories = [
  { route: "real-estate", 
    subCategories: 
      [
        { subCategoryRoute: "buy-residential", subCategoryText: level2PersianTexts["buy-residential"], level3Subcategories: level3SubCategories[0].subcategories },
        { subCategoryRoute: "rent-residential", subCategoryText: level2PersianTexts["rent-residential"], level3Subcategories: level3SubCategories[1].subcategories },
        { subCategoryRoute: "buy-commercial-property", subCategoryText: level2PersianTexts["buy-commercial-property"], level3Subcategories: level3SubCategories[2].subcategories },
        { subCategoryRoute: "rent-commercial-property", subCategoryText: level2PersianTexts["rent-commercial-property"], level3Subcategories: level3SubCategories[3].subcategories },
        { subCategoryRoute: "rent-temporary", subCategoryText: level2PersianTexts["rent-temporary"], level3Subcategories: level3SubCategories[4].subcategories },
        { subCategoryRoute: "real-estate-services", subCategoryText: level2PersianTexts["real-estate-services"], level3Subcategories: level3SubCategories[5].subcategories },
      ]
  },
  {
    route: "vehicles",
    subCategories: 
      [
        { subCategoryRoute: "auto", subCategoryText: level2PersianTexts.auto, level3Subcategories: level3SubCategories[6].subcategories },
        { subCategoryRoute: "car-accessories", subCategoryText: level2PersianTexts["car-accessories"], level3Subcategories: level3SubCategories[7].subcategories },
        { subCategoryRoute: "motorcycles", subCategoryText: level2PersianTexts.motorcycles, level3Subcategories: level3SubCategories[8].subcategories },
        { subCategoryRoute: "boat", subCategoryText: level2PersianTexts.boat, level3Subcategories: level3SubCategories[9].subcategories },
      ]
  },
  {
    route: "electronic-devices",
    subCategories: 
    [
      { subCategoryRoute: "mobile-tablet", subCategoryText: level2PersianTexts["mobile-tablet"], level3Subcategories: level3SubCategories[10].subcategories },
      { subCategoryRoute: "computers", subCategoryText: level2PersianTexts.computers, level3Subcategories: level3SubCategories[11].subcategories },
      { subCategoryRoute: "game-consoles", subCategoryText: level2PersianTexts["game-consoles"], level3Subcategories: level3SubCategories[12].subcategories },
      { subCategoryRoute: "video-audio-device", subCategoryText: level2PersianTexts["video-audio-device"], level3Subcategories: level3SubCategories[13].subcategories },
      { subCategoryRoute: "telephone", subCategoryText: level2PersianTexts.telephone, level3Subcategories: level3SubCategories[14].subcategories },
    ]
  },
  {
    route: "home-and-kitchen",
    subCategories: 
    [
      { subCategoryRoute: "home-decor-furniture", subCategoryText: level2PersianTexts["home-decor-furniture"], level3Subcategories: level3SubCategories[15].subcategories },
      { subCategoryRoute: "kitchen-appliances", subCategoryText: level2PersianTexts["kitchen-appliances"], level3Subcategories: level3SubCategories[16].subcategories },
      { subCategoryRoute: "home-appliances", subCategoryText: level2PersianTexts["home-appliances"], level3Subcategories: level3SubCategories[17].subcategories },
      { subCategoryRoute: "building-garden", subCategoryText: level2PersianTexts["building-garden"], level3Subcategories: level3SubCategories[18].subcategories },
    ]
  },
  {
    route: "services",
    subCategories: 
    [
      { subCategoryRoute: "vehicles-services", subCategoryText: level2PersianTexts["vehicles-services"], level3Subcategories: level3SubCategories[19].subcategories },
      { subCategoryRoute: "catering-services", subCategoryText: level2PersianTexts["catering-services"], level3Subcategories: level3SubCategories[20].subcategories },
      { subCategoryRoute: "technology-services", subCategoryText: level2PersianTexts["technology-services"], level3Subcategories: level3SubCategories[21].subcategories },
      { subCategoryRoute: "financial-services", subCategoryText: level2PersianTexts["financial-services"], level3Subcategories: level3SubCategories[22].subcategories },
      { subCategoryRoute: "transport-logistic-services", subCategoryText: level2PersianTexts["transport-logistic-services"], level3Subcategories: level3SubCategories[23].subcategories },
      { subCategoryRoute: "craft-skill-services", subCategoryText: level2PersianTexts["craft-skill-services"], level3Subcategories: level3SubCategories[24].subcategories },
      { subCategoryRoute: "beauty-services", subCategoryText: level2PersianTexts["beauty-services"], level3Subcategories: level3SubCategories[25].subcategories },
      { subCategoryRoute: "entertaining-services", subCategoryText: level2PersianTexts["entertaining-services"], level3Subcategories: level3SubCategories[26].subcategories },
      { subCategoryRoute: "cleaning-services", subCategoryText: level2PersianTexts["cleaning-services"], level3Subcategories: level3SubCategories[27].subcategories },
      { subCategoryRoute: "gardening-services", subCategoryText: level2PersianTexts["gardening-services"], level3Subcategories: level3SubCategories[28].subcategories },
      { subCategoryRoute: "teaching-services", subCategoryText: level2PersianTexts["teaching-services"], level3Subcategories: level3SubCategories[29].subcategories },
    ]
  },
  {
    route: "personal-goods",
    subCategories: 
    [
      { subCategoryRoute: "apparel", subCategoryText: level2PersianTexts.apparel, level3Subcategories: level3SubCategories[30].subcategories },
      { subCategoryRoute: "accessories", subCategoryText: level2PersianTexts.accessories, level3Subcategories: level3SubCategories[31].subcategories },
      { subCategoryRoute: "beauty-and-personal-care", subCategoryText: level2PersianTexts["beauty-and-personal-care"], level3Subcategories: level3SubCategories[32].subcategories },
      { subCategoryRoute: "child-apparel", subCategoryText: level2PersianTexts["child-apparel"], level3Subcategories: level3SubCategories[33].subcategories },
      { subCategoryRoute: "child-products", subCategoryText: level2PersianTexts["child-products"], level3Subcategories: level3SubCategories[34].subcategories },
      { subCategoryRoute: "stationery", subCategoryText: level2PersianTexts.stationery, level3Subcategories: level3SubCategories[35].subcategories },
    ]
  },
  {
    route: "entertainment",
    subCategories: 
    [
      { subCategoryRoute: "ticket", subCategoryText: level2PersianTexts.ticket, level3Subcategories: level3SubCategories[36].subcategories },
      { subCategoryRoute: "tours", subCategoryText: level2PersianTexts.tours, level3Subcategories: level3SubCategories[37].subcategories },
      { subCategoryRoute: "publication", subCategoryText: level2PersianTexts.publication, level3Subcategories: level3SubCategories[38].subcategories },
      { subCategoryRoute: "bike-skate-scooter", subCategoryText: level2PersianTexts["bike-skate-scooter"], level3Subcategories: level3SubCategories[39].subcategories },
      { subCategoryRoute: "pets-animals", subCategoryText: level2PersianTexts["pets-animals"], level3Subcategories: level3SubCategories[40].subcategories },
      { subCategoryRoute: "collecting", subCategoryText: level2PersianTexts.collecting },
      { subCategoryRoute: "musical-instruments", subCategoryText: level2PersianTexts["musical-instruments"], level3Subcategories: level3SubCategories[41].subcategories },
      { subCategoryRoute: "sport-entertainment", subCategoryText: level2PersianTexts["sport-entertainment"], level3Subcategories: level3SubCategories[42].subcategories },
      { subCategoryRoute: "game-and-toys", subCategoryText: level2PersianTexts["game-and-toys"], level3Subcategories: level3SubCategories[43].subcategories },
    ]
  },
  {
    route: "social-services",
    subCategories:
      [
        { subCategoryRoute: "event", subCategoryText: level2PersianTexts.event, level3Subcategories: level3SubCategories[44].subcategories },
        { subCategoryRoute: "voluntary", subCategoryText: level2PersianTexts.voluntary, level3Subcategories: level3SubCategories[45].subcategories },
        { subCategoryRoute: "missing", subCategoryText: level2PersianTexts.missing, level3Subcategories: level3SubCategories[46].subcategories },
      ]
  },
  {
    route: "businesses",
    subCategories: 
      [
        { subCategoryRoute: "business-equipment", subCategoryText: level2PersianTexts["business-equipment"], level3Subcategories: level3SubCategories[47].subcategories },
        { subCategoryRoute: "wholesale", subCategoryText: level2PersianTexts.wholesale, level3Subcategories: level3SubCategories[48].subcategories },
      ]
  },
  {
    route: "jobs",
    subCategories: 
      [
        { subCategoryRoute: "administrative-jobs", subCategoryText: level2PersianTexts["administrative-jobs"], level3Subcategories: level3SubCategories[49].subcategories },
        { subCategoryRoute: "janitorial-jobs", subCategoryText: level2PersianTexts["janitorial-jobs"], level3Subcategories: level3SubCategories[50].subcategories },
        { subCategoryRoute: "architect-jobs", subCategoryText: level2PersianTexts["architect-jobs"], level3Subcategories: level3SubCategories[51].subcategories },
        { subCategoryRoute: "service-jobs", subCategoryText: level2PersianTexts["service-jobs"], level3Subcategories: level3SubCategories[52].subcategories },
        { subCategoryRoute: "it-computer-jobs", subCategoryText: level2PersianTexts["it-computer-jobs"], level3Subcategories: level3SubCategories[53].subcategories },
        { subCategoryRoute: "finance-legal-jobs", subCategoryText: level2PersianTexts["finance-legal-jobs"], level3Subcategories: level3SubCategories[54].subcategories },
        { subCategoryRoute: "marketing-jobs", subCategoryText: level2PersianTexts["marketing-jobs"], level3Subcategories: level3SubCategories[55].subcategories },
        { subCategoryRoute: "technical-jobs", subCategoryText: level2PersianTexts["technical-jobs"], level3Subcategories: level3SubCategories[56].subcategories },
        { subCategoryRoute: "teaching-jobs", subCategoryText: level2PersianTexts["teaching-jobs"], level3Subcategories: level3SubCategories[57].subcategories },
        { subCategoryRoute: "transport-delivery-jobs", subCategoryText: level2PersianTexts["transport-delivery-jobs"], level3Subcategories: level3SubCategories[58].subcategories },
        { subCategoryRoute: "health-beauty-jobs", subCategoryText: level2PersianTexts["health-beauty-jobs"], level3Subcategories: level3SubCategories[59].subcategories },
        { subCategoryRoute: "art-media-jobs", subCategoryText: level2PersianTexts["art-media-jobs"], level3Subcategories: level3SubCategories[60].subcategories },
      ]
  },
]

export const topLevelRoutesTitlesIcons = [
  { 
    route: "real-estate", text: realEstate, icon: HouseOutlined,
    subCategories: 
    [
      { subCategoryRoute: "buy-residential", subCategoryText: level2PersianTexts["buy-residential"], level2SubCategories: level3SubCategories[0].subcategories },
      { subCategoryRoute: "rent-residential", subCategoryText: level2PersianTexts["rent-residential"], level2SubCategories: level3SubCategories[1].subcategories },
      { subCategoryRoute: "buy-commercial-property", subCategoryText: level2PersianTexts["buy-commercial-property"], level2SubCategories: level3SubCategories[2].subcategories },
      { subCategoryRoute: "rent-commercial-property", subCategoryText: level2PersianTexts["rent-commercial-property"], level2SubCategories: level3SubCategories[3].subcategories },
      { subCategoryRoute: "rent-temporary", subCategoryText: level2PersianTexts["rent-temporary"], level2SubCategories: level3SubCategories[4].subcategories },
      { subCategoryRoute: "real-estate-services", subCategoryText: level2PersianTexts["real-estate-services"], level2SubCategories: level3SubCategories[5].subcategories },
    ]  
  },
  { route: "vehicles", text: vehicles, icon: Car,
  subCategories: 
  [
    { subCategoryRoute: "auto", subCategoryText: level2PersianTexts.auto, level2SubCategories: level3SubCategories[6].subcategories },
    { subCategoryRoute: "car-accessories", subCategoryText: level2PersianTexts["car-accessories"], level2SubCategories: level3SubCategories[7].subcategories },
    { subCategoryRoute: "motorcycles", subCategoryText: level2PersianTexts.motorcycles, level2SubCategories: level3SubCategories[8].subcategories },
    { subCategoryRoute: "boat", subCategoryText: level2PersianTexts.boat, level2SubCategories: level3SubCategories[9].subcategories },
  ]  },
  { route: "electronic-devices", text: electronicDevices, icon: SmartPhone,
  subCategories: 
  [
    { subCategoryRoute: "mobile-tablet", subCategoryText: level2PersianTexts["mobile-tablet"], level2SubCategories: level3SubCategories[10].subcategories },
    { subCategoryRoute: "computers", subCategoryText: level2PersianTexts.computers, level2SubCategories: level3SubCategories[11].subcategories },
    { subCategoryRoute: "game-consoles", subCategoryText: level2PersianTexts["game-consoles"], level2SubCategories: level3SubCategories[12].subcategories },
    { subCategoryRoute: "video-audio-device", subCategoryText: level2PersianTexts["video-audio-device"], level2SubCategories: level3SubCategories[13].subcategories },
    { subCategoryRoute: "telephone", subCategoryText: level2PersianTexts.telephone, level2SubCategories: level3SubCategories[14].subcategories },
  ]  },
  { route: "home-and-kitchen", text: homeAndKitchen, icon: Furniture,
  subCategories: 
  [
    { subCategoryRoute: "home-decor-furniture", subCategoryText: level2PersianTexts["home-decor-furniture"], level2SubCategories: level3SubCategories[15].subcategories },
    { subCategoryRoute: "kitchen-appliances", subCategoryText: level2PersianTexts["kitchen-appliances"], level2SubCategories: level3SubCategories[16].subcategories },
    { subCategoryRoute: "home-appliances", subCategoryText: level2PersianTexts["home-appliances"], level2SubCategories: level3SubCategories[17].subcategories },
    { subCategoryRoute: "building-garden", subCategoryText: level2PersianTexts["building-garden"], level2SubCategories: level3SubCategories[18].subcategories },
  ]  },
  { route: "services", text: services, icon: Build,
  subCategories: 
  [
    { subCategoryRoute: "vehicles-services", subCategoryText: level2PersianTexts["vehicles-services"], level2SubCategories: level3SubCategories[19].subcategories },
    { subCategoryRoute: "catering-services", subCategoryText: level2PersianTexts["catering-services"], level2SubCategories: level3SubCategories[20].subcategories },
    { subCategoryRoute: "technology-services", subCategoryText: level2PersianTexts["technology-services"], level2SubCategories: level3SubCategories[21].subcategories },
    { subCategoryRoute: "financial-services", subCategoryText: level2PersianTexts["financial-services"], level2SubCategories: level3SubCategories[22].subcategories },
    { subCategoryRoute: "transport-logistic-services", subCategoryText: level2PersianTexts["transport-logistic-services"], level2SubCategories: level3SubCategories[23].subcategories },
    { subCategoryRoute: "craft-skill-services", subCategoryText: level2PersianTexts["craft-skill-services"], level2SubCategories: level3SubCategories[24].subcategories },
    { subCategoryRoute: "beauty-services", subCategoryText: level2PersianTexts["beauty-services"], level2SubCategories: level3SubCategories[25].subcategories },
    { subCategoryRoute: "entertaining-services", subCategoryText: level2PersianTexts["entertaining-services"], level2SubCategories: level3SubCategories[26].subcategories },
    { subCategoryRoute: "cleaning-services", subCategoryText: level2PersianTexts["cleaning-services"], level2SubCategories: level3SubCategories[27].subcategories },
    { subCategoryRoute: "gardening-services", subCategoryText: level2PersianTexts["gardening-services"], level2SubCategories: level3SubCategories[28].subcategories },
    { subCategoryRoute: "teaching-services", subCategoryText: level2PersianTexts["teaching-services"], level2SubCategories: level3SubCategories[29].subcategories },
  ]  },
  { route: "personal-goods", text: personalGoods, icon: Watch,
  subCategories: 
  [
    { subCategoryRoute: "apparel", subCategoryText: level2PersianTexts.apparel, level2SubCategories: level3SubCategories[30].subcategories },
    { subCategoryRoute: "accessories", subCategoryText: level2PersianTexts.accessories, level2SubCategories: level3SubCategories[31].subcategories },
    { subCategoryRoute: "beauty-and-personal-care", subCategoryText: level2PersianTexts["beauty-and-personal-care"], level2SubCategories: level3SubCategories[32].subcategories },
    { subCategoryRoute: "child-apparel", subCategoryText: level2PersianTexts["child-apparel"], level2SubCategories: level3SubCategories[33].subcategories },
    { subCategoryRoute: "child-products", subCategoryText: level2PersianTexts["child-products"], level2SubCategories: level3SubCategories[34].subcategories },
    { subCategoryRoute: "stationery", subCategoryText: level2PersianTexts.stationery, level2SubCategories: level3SubCategories[35].subcategories },
  ]  },
  { route: "entertainment", text: entertainment, icon: Dice,
  subCategories: 
  [
    { subCategoryRoute: "ticket", subCategoryText: level2PersianTexts.ticket, level2SubCategories: level3SubCategories[36].subcategories },
    { subCategoryRoute: "tours", subCategoryText: level2PersianTexts.tours, level2SubCategories: level3SubCategories[37].subcategories },
    { subCategoryRoute: "publication", subCategoryText: level2PersianTexts.publication, level2SubCategories: level3SubCategories[38].subcategories },
    { subCategoryRoute: "bike-skate-scooter", subCategoryText: level2PersianTexts["bike-skate-scooter"], level2SubCategories: level3SubCategories[39].subcategories },
    { subCategoryRoute: "pets-animals", subCategoryText: level2PersianTexts["pets-animals"], level2SubCategories: level3SubCategories[40].subcategories },
    { subCategoryRoute: "collecting", subCategoryText: level2PersianTexts.collecting, level2SubCategories: level3SubCategories[41].subcategories },
    { subCategoryRoute: "musical-instruments", subCategoryText: level2PersianTexts["musical-instruments"], level2SubCategories: level3SubCategories[42].subcategories },
    { subCategoryRoute: "sport-entertainment", subCategoryText: level2PersianTexts["sport-entertainment"], level2SubCategories: level3SubCategories[43].subcategories },
    { subCategoryRoute: "game-and-toys", subCategoryText: level2PersianTexts["game-and-toys"], level2SubCategories: level3SubCategories[44].subcategories },
  ]  },
  { route: "social-services", text: socialServices, icon: People,
  subCategories:
  [
    { subCategoryRoute: "event", subCategoryText: level2PersianTexts.event, level2SubCategories: level3SubCategories[45].subcategories },
    { subCategoryRoute: "voluntary", subCategoryText: level2PersianTexts.voluntary, level2SubCategories: level3SubCategories[46].subcategories },
    { subCategoryRoute: "missing", subCategoryText: level2PersianTexts.missing, level2SubCategories: level3SubCategories[47].subcategories },
  ]  },
  { route: "businesses", text: businesses, icon: Work,
  subCategories: 
  [
    { subCategoryRoute: "business-equipment", subCategoryText: level2PersianTexts["business-equipment"], level2SubCategories: level3SubCategories[48].subcategories },
    { subCategoryRoute: "wholesale", subCategoryText: level2PersianTexts.wholesale, level2SubCategories: level3SubCategories[49].subcategories },
  ]  },
  { route: "jobs", text: jobs, icon: Business,
  subCategories: 
  [
    { subCategoryRoute: "administrative-jobs", subCategoryText: level2PersianTexts["administrative-jobs"], level2SubCategories: level3SubCategories[50].subcategories },
    { subCategoryRoute: "janitorial-jobs", subCategoryText: level2PersianTexts["janitorial-jobs"], level2SubCategories: level3SubCategories[51].subcategories },
    { subCategoryRoute: "architect-jobs", subCategoryText: level2PersianTexts["architect-jobs"], level2SubCategories: level3SubCategories[52].subcategories },
    { subCategoryRoute: "service-jobs", subCategoryText: level2PersianTexts["service-jobs"], level2SubCategories: level3SubCategories[53].subcategories },
    { subCategoryRoute: "it-computer-jobs", subCategoryText: level2PersianTexts["it-computer-jobs"], level2SubCategories: level3SubCategories[54].subcategories },
    { subCategoryRoute: "finance-legal-jobs", subCategoryText: level2PersianTexts["finance-legal-jobs"], level2SubCategories: level3SubCategories[55].subcategories },
    { subCategoryRoute: "marketing-jobs", subCategoryText: level2PersianTexts["marketing-jobs"], level2SubCategories: level3SubCategories[56].subcategories },
    { subCategoryRoute: "technical-jobs", subCategoryText: level2PersianTexts["technical-jobs"], level2SubCategories: level3SubCategories[57].subcategories },
    { subCategoryRoute: "teaching-jobs", subCategoryText: level2PersianTexts["teaching-jobs"], level2SubCategories: level3SubCategories[58].subcategories },
    { subCategoryRoute: "transport-delivery-jobs", subCategoryText: level2PersianTexts["transport-delivery-jobs"], level2SubCategories: level3SubCategories[59].subcategories },
    { subCategoryRoute: "health-beauty-jobs", subCategoryText: level2PersianTexts["health-beauty-jobs"], level2SubCategories: level3SubCategories[60].subcategories },
    { subCategoryRoute: "art-media-jobs", subCategoryText: level2PersianTexts["art-media-jobs"], level2SubCategories: level3SubCategories[61].subcategories },
  ]  },
]

export const allCategories = {
  "name": "همهٔ آگهی‌ها",
  "icon": "",
  "id": 0,
  "slug": "ROOT",
  "second_slug": "",
  "children": [
      {
          "name": "املاک",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/house_%s.png",
          "id": 143,
          "slug": "real-estate",
          "second_slug": "املاک-مسکن",
          "children": [
              {
                  "name": "فروش مسکونی",
                  "icon": "",
                  "id": 209,
                  "slug": "buy-residential",
                  "second_slug": "فروش-مسکونی-آپارتمان-خانه-زمین",
                  "children": [
                      {
                          "name": "آپارتمان",
                          "icon": "",
                          "id": 210,
                          "slug": "buy-apartment",
                          "second_slug": "فروش-آپارتمان",
                          "children": [],
                          "parent": "buy-residential",
                          "second_name": "فروش آپارتمان",
                          "url": {
                              "display": "املاک-مسکن/فروش-مسکونی-آپارتمان-خانه-زمین/فروش-آپارتمان",
                              "order": 1
                          }
                      },
                      {
                          "name": "خانه و ویلا",
                          "icon": "",
                          "id": 211,
                          "slug": "buy-villa",
                          "second_slug": "فروش-خانه-ویلا",
                          "children": [],
                          "parent": "buy-residential",
                          "second_name": "فروش خانه و ویلا",
                          "url": {
                              "display": "املاک-مسکن/فروش-مسکونی-آپارتمان-خانه-زمین/فروش-خانه-ویلا",
                              "order": 1
                          }
                      },
                      {
                          "name": "زمین و کلنگی",
                          "icon": "",
                          "id": 212,
                          "slug": "buy-old-house",
                          "second_slug": "زمین-کلنگی",
                          "children": [],
                          "parent": "buy-residential",
                          "second_name": "فروش زمین و کلنگی",
                          "url": {
                              "display": "املاک-مسکن/فروش-مسکونی-آپارتمان-خانه-زمین/زمین-کلنگی",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های فروش مسکونی",
                          "icon": "",
                          "id": 209,
                          "slug": "buy-residential",
                          "second_slug": "فروش-مسکونی-آپارتمان-خانه-زمین",
                          "children": [],
                          "parent": "buy-residential",
                          "second_name": "فروش مسکونی",
                          "url": {
                              "display": "املاک-مسکن/فروش-مسکونی-آپارتمان-خانه-زمین",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "real-estate",
                  "second_name": "فروش مسکونی",
                  "url": {
                      "display": "املاک-مسکن/فروش-مسکونی-آپارتمان-خانه-زمین",
                      "order": 1
                  }
              },
              {
                  "name": "اجاره مسکونی",
                  "icon": "",
                  "id": 213,
                  "slug": "rent-residential",
                  "second_slug": "اجاره-مسکونی-آپارتمان-خانه-زمین",
                  "children": [
                      {
                          "name": "آپارتمان",
                          "icon": "",
                          "id": 214,
                          "slug": "rent-apartment",
                          "second_slug": "اجاره-آپارتمان",
                          "children": [],
                          "parent": "rent-residential",
                          "second_name": "اجاره آپارتمان",
                          "url": {
                              "display": "املاک-مسکن/اجاره-مسکونی-آپارتمان-خانه-زمین/اجاره-آپارتمان",
                              "order": 1
                          }
                      },
                      {
                          "name": "خانه و ویلا",
                          "icon": "",
                          "id": 215,
                          "slug": "rent-villa",
                          "second_slug": "اجاره-خانه-ویلا",
                          "children": [],
                          "parent": "rent-residential",
                          "second_name": "اجاره خانه و ویلا",
                          "url": {
                              "display": "املاک-مسکن/اجاره-مسکونی-آپارتمان-خانه-زمین/اجاره-خانه-ویلا",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های اجاره مسکونی",
                          "icon": "",
                          "id": 213,
                          "slug": "rent-residential",
                          "second_slug": "اجاره-مسکونی-آپارتمان-خانه-زمین",
                          "children": [],
                          "parent": "rent-residential",
                          "second_name": "اجاره مسکونی",
                          "url": {
                              "display": "املاک-مسکن/اجاره-مسکونی-آپارتمان-خانه-زمین",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "real-estate",
                  "second_name": "اجاره مسکونی",
                  "url": {
                      "display": "املاک-مسکن/اجاره-مسکونی-آپارتمان-خانه-زمین",
                      "order": 1
                  }
              },
              {
                  "name": "فروش اداری و تجاری",
                  "icon": "",
                  "id": 217,
                  "slug": "buy-commercial-property",
                  "second_slug": "فروش-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                  "children": [
                      {
                          "name": "دفتر کار، اتاق اداری و مطب",
                          "icon": "",
                          "id": 218,
                          "slug": "buy-office",
                          "second_slug": "فروش-دفتر-کار-اتاق-اداری-مطب",
                          "children": [],
                          "parent": "buy-commercial-property",
                          "second_name": "فروش دفتر کار، دفتر اداری و مطب",
                          "url": {
                              "display": "املاک-مسکن/فروش-اداری-تجاری-مغازه-دفتر-کار-صنعتی/فروش-دفتر-کار-اتاق-اداری-مطب",
                              "order": 1
                          }
                      },
                      {
                          "name": "مغازه و غرفه",
                          "icon": "",
                          "id": 219,
                          "slug": "buy-store",
                          "second_slug": "فروش-مغازه-غرفه",
                          "children": [],
                          "parent": "buy-commercial-property",
                          "second_name": "فروش مغازه و غرفه",
                          "url": {
                              "display": "املاک-مسکن/فروش-اداری-تجاری-مغازه-دفتر-کار-صنعتی/فروش-مغازه-غرفه",
                              "order": 1
                          }
                      },
                      {
                          "name": "صنعتی،‌ کشاورزی و تجاری",
                          "icon": "",
                          "id": 220,
                          "slug": "buy-industrial-agricultural-property",
                          "second_slug": "فروش-صنعتی-کشاورزی-تجاری",
                          "children": [],
                          "parent": "buy-commercial-property",
                          "second_name": "فروش دفاتر صنعتی، کشاورزی و تجاری",
                          "url": {
                              "display": "املاک-مسکن/فروش-اداری-تجاری-مغازه-دفتر-کار-صنعتی/فروش-صنعتی-کشاورزی-تجاری",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های فروش اداری و تجاری",
                          "icon": "",
                          "id": 217,
                          "slug": "buy-commercial-property",
                          "second_slug": "فروش-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                          "children": [],
                          "parent": "buy-commercial-property",
                          "second_name": "فروش دفاتر اداری و تجاری",
                          "url": {
                              "display": "املاک-مسکن/فروش-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "real-estate",
                  "second_name": "فروش دفاتر اداری و تجاری",
                  "url": {
                      "display": "املاک-مسکن/فروش-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                      "order": 1
                  }
              },
              {
                  "name": "اجاره اداری و تجاری",
                  "icon": "",
                  "id": 221,
                  "slug": "rent-commercial-property",
                  "second_slug": "اجاره-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                  "children": [
                      {
                          "name": "دفتر کار، اتاق اداری و مطب",
                          "icon": "",
                          "id": 222,
                          "slug": "rent-office",
                          "second_slug": "اجاره-دفتر-کار-اتاق-اداری-مطب",
                          "children": [],
                          "parent": "rent-commercial-property",
                          "second_name": "اجاره دفتر کار، اتاق اداری و مطب",
                          "url": {
                              "display": "املاک-مسکن/اجاره-اداری-تجاری-مغازه-دفتر-کار-صنعتی/اجاره-دفتر-کار-اتاق-اداری-مطب",
                              "order": 1
                          }
                      },
                      {
                          "name": "مغازه و غرفه",
                          "icon": "",
                          "id": 223,
                          "slug": "rent-store",
                          "second_slug": "اجاره-مغازه-غرفه",
                          "children": [],
                          "parent": "rent-commercial-property",
                          "second_name": "اجاره مغازه و غرفه",
                          "url": {
                              "display": "املاک-مسکن/اجاره-اداری-تجاری-مغازه-دفتر-کار-صنعتی/اجاره-مغازه-غرفه",
                              "order": 1
                          }
                      },
                      {
                          "name": "صنعتی،‌ کشاورزی و تجاری",
                          "icon": "",
                          "id": 224,
                          "slug": "rent-industrial-agricultural-property",
                          "second_slug": "اجاره-صنعتی-کشاورزی-تجاری",
                          "children": [],
                          "parent": "rent-commercial-property",
                          "second_name": "اجاره دفاتر صنعتی، کشاورزی و تجاری",
                          "url": {
                              "display": "املاک-مسکن/اجاره-اداری-تجاری-مغازه-دفتر-کار-صنعتی/اجاره-صنعتی-کشاورزی-تجاری",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های اجاره اداری و تجاری",
                          "icon": "",
                          "id": 221,
                          "slug": "rent-commercial-property",
                          "second_slug": "اجاره-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                          "children": [],
                          "parent": "rent-commercial-property",
                          "second_name": "اجاره دفاتر اداری و تجاری",
                          "url": {
                              "display": "املاک-مسکن/اجاره-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "real-estate",
                  "second_name": "اجاره دفاتر اداری و تجاری",
                  "url": {
                      "display": "املاک-مسکن/اجاره-اداری-تجاری-مغازه-دفتر-کار-صنعتی",
                      "order": 1
                  }
              },
              {
                  "name": "اجاره کوتاه مدت",
                  "icon": "",
                  "id": 245,
                  "slug": "rent-temporary",
                  "second_slug": "اجاره-کوتاه-مدت",
                  "children": [
                      {
                          "name": "آپارتمان و سوئیت",
                          "icon": "",
                          "id": 246,
                          "slug": "rent-temporary-suite-apartment",
                          "second_slug": "آپارتمان-و-سوئیت",
                          "children": [],
                          "parent": "rent-temporary",
                          "second_name": "اجاره کوتاه مدت آپارتمان و سوئیت",
                          "url": {
                              "display": "آپارتمان-و-سوئیت",
                              "order": 1
                          }
                      },
                      {
                          "name": "ویلا و باغ",
                          "icon": "",
                          "id": 247,
                          "slug": "rent-temporary-villa",
                          "second_slug": "ویلا-و-باغ",
                          "children": [],
                          "parent": "rent-temporary",
                          "second_name": "اجاره کوتاه مدت ویلا و باغ",
                          "url": {
                              "display": "ویلا-و-باغ",
                              "order": 1
                          }
                      },
                      {
                          "name": "دفتر کار و فضای آموزشی",
                          "icon": "",
                          "id": 248,
                          "slug": "rent-temporary-workspace",
                          "second_slug": "دفتر-کار-و-فضای-آموزشی",
                          "children": [],
                          "parent": "rent-temporary",
                          "second_name": "اجاره کوتاه مدت دفتر کار و فضای آموزشی",
                          "url": {
                              "display": "دفتر-کار-و-فضای-آموزشی",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های اجاره کوتاه مدت",
                          "icon": "",
                          "id": 245,
                          "slug": "rent-temporary",
                          "second_slug": "اجاره-کوتاه-مدت",
                          "children": [],
                          "parent": "rent-temporary",
                          "second_name": "اجاره کوتاه مدت",
                          "url": {
                              "display": "اجاره-کوتاه-مدت",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "real-estate",
                  "second_name": "اجاره کوتاه مدت",
                  "url": {
                      "display": "اجاره-کوتاه-مدت",
                      "order": 1
                  }
              },
              {
                  "name": "پروژه‌های ساخت و ساز",
                  "icon": "",
                  "id": 150,
                  "slug": "real-estate-services",
                  "second_slug": "خدمات-سامانه-املاک-مسکن,خدمات-املاک",
                  "children": [
                      {
                          "name": "مشارکت در ساخت",
                          "icon": "",
                          "id": 226,
                          "slug": "contribution-construction",
                          "second_slug": "مشارکت-در-ساخت",
                          "children": [],
                          "parent": "real-estate-services",
                          "second_name": "مشارکت در ساخت املاک",
                          "url": {
                              "display": "املاک-مسکن/خدمات-سامانه-املاک-مسکن/مشارکت-در-ساخت",
                              "order": 1
                          }
                      },
                      {
                          "name": "پیش‌فروش",
                          "icon": "",
                          "id": 229,
                          "slug": "pre-sell-home",
                          "second_slug": "پیش-فروش",
                          "children": [],
                          "parent": "real-estate-services",
                          "second_name": "پیش فروش املاک",
                          "url": {
                              "display": "املاک-مسکن/خدمات-سامانه-املاک-مسکن/پیش-فروش",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های پرو‌ژه‌های ساخت و ساز",
                          "icon": "",
                          "id": 150,
                          "slug": "real-estate-services",
                          "second_slug": "خدمات-سامانه-املاک-مسکن,خدمات-املاک",
                          "children": [],
                          "parent": "real-estate-services",
                          "second_name": "پروژه‌های ساخت و ساز",
                          "url": {
                              "display": "املاک-مسکن/خدمات-سامانه-املاک-مسکن/خدمات-سامانه-املاک-مسکن",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "real-estate",
                  "second_name": "پروژه‌های ساخت و ساز",
                  "url": {
                      "display": "املاک-مسکن/خدمات-سامانه-املاک-مسکن",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های املاک",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/house_%s.png",
                  "id": 143,
                  "slug": "real-estate",
                  "second_slug": "املاک-مسکن",
                  "children": [],
                  "parent": "real-estate",
                  "second_name": "املاک",
                  "url": {
                      "display": "املاک-مسکن",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "املاک",
          "url": {
              "display": "املاک-مسکن",
              "order": 1
          }
      },
      {
          "name": "وسایل نقلیه",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/car_%s.png",
          "id": 67,
          "slug": "vehicles",
          "second_slug": "وسایل-نقلیه",
          "children": [
              {
                  "name": "خودرو",
                  "icon": "",
                  "id": 68,
                  "slug": "auto",
                  "second_slug": "خودرو",
                  "children": [
                      {
                          "name": "سواری",
                          "icon": "",
                          "id": 230,
                          "slug": "car",
                          "second_slug": "ماشین-سواری,سواری",
                          "children": [],
                          "parent": "auto",
                          "second_name": "خودرو سواری",
                          "url": {
                              "display": "وسایل-نقلیه/خودرو/ماشین-سواری",
                              "order": 1
                          }
                      },
                      {
                          "name": "کلاسیک",
                          "icon": "",
                          "id": 235,
                          "slug": "classic-car",
                          "second_slug": "ماشین-کلاسیک,کلاسیک",
                          "children": [],
                          "parent": "auto",
                          "second_name": "خودرو کلاسیک",
                          "url": {
                              "display": "وسایل-نقلیه/خودرو/ماشین-کلاسیک",
                              "order": 1
                          }
                      },
                      {
                          "name": "اجاره‌ای",
                          "icon": "",
                          "id": 234,
                          "slug": "rental-car",
                          "second_slug": "ماشین-اجاره‌ای,اجاره‌ای",
                          "children": [],
                          "parent": "auto",
                          "second_name": "خودرو اجاره ای",
                          "url": {
                              "display": "وسایل-نقلیه/خودرو/ماشین-اجاره‌ای",
                              "order": 1
                          }
                      },
                      {
                          "name": "سنگین",
                          "icon": "",
                          "id": 231,
                          "slug": "heavy-car",
                          "second_slug": "ماشین-سنگین,سنگین",
                          "children": [],
                          "parent": "auto",
                          "second_name": "خودرو سنگین",
                          "url": {
                              "display": "وسایل-نقلیه/خودرو/ماشین-سنگین",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های خودرو",
                          "icon": "",
                          "id": 68,
                          "slug": "auto",
                          "second_slug": "خودرو",
                          "children": [],
                          "parent": "auto",
                          "second_name": "خودرو",
                          "url": {
                              "display": "وسایل-نقلیه/خودرو",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "vehicles",
                  "second_name": "خودرو",
                  "url": {
                      "display": "وسایل-نقلیه/خودرو",
                      "order": 1
                  }
              },
              {
                  "name": "قطعات یدکی و لوازم جانبی خودرو",
                  "icon": "",
                  "id": 69,
                  "slug": "car-accessories",
                  "second_slug": "قطعات-یدکی-لوازم-جانبی-خودرو",
                  "children": [],
                  "parent": "vehicles",
                  "second_name": "قطعات یدکی و لوازم جانبی خودرو",
                  "url": {
                      "display": "وسایل-نقلیه/قطعات-یدکی-لوازم-جانبی-خودرو",
                      "order": 1
                  }
              },
              {
                  "name": "موتورسیکلت و لوازم جانبی",
                  "icon": "",
                  "id": 73,
                  "slug": "motorcycles",
                  "second_slug": "موتورسیکلت-لوازم-جانبی",
                  "children": [],
                  "parent": "vehicles",
                  "second_name": "موتورسیکلت و لوازم جانبی",
                  "url": {
                      "display": "وسایل-نقلیه/موتورسیکلت-لوازم-جانبی",
                      "order": 1
                  }
              },
              {
                  "name": "قایق و لوازم جانبی",
                  "icon": "",
                  "id": 70,
                  "slug": "boat",
                  "second_slug": "قایق-لوازم-جانبی",
                  "children": [],
                  "parent": "vehicles",
                  "second_name": "قایق و لوازم جانبی",
                  "url": {
                      "display": "وسایل-نقلیه/قایق-لوازم-جانبی",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های وسایل نقلیه",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/car_%s.png",
                  "id": 67,
                  "slug": "vehicles",
                  "second_slug": "وسایل-نقلیه",
                  "children": [],
                  "parent": "vehicles",
                  "second_name": "وسایل نقلیه",
                  "url": {
                      "display": "وسایل-نقلیه",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "وسایل نقلیه",
          "url": {
              "display": "وسایل-نقلیه",
              "order": 1
          }
      },
      {
          "name": "لوازم الکترونیکی",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/electronic-devices_%s.png",
          "id": 1,
          "slug": "electronic-devices",
          "second_slug": "لوازم-الکترونیکی",
          "children": [
              {
                  "name": "موبایل و تبلت",
                  "icon": "",
                  "id": 37,
                  "slug": "mobile-tablet",
                  "second_slug": "گوشی-موبایل-تبلت,موبایل-تبلت",
                  "children": [
                      {
                          "name": "گوشی موبایل",
                          "icon": "",
                          "id": 117,
                          "slug": "mobile-phones",
                          "second_slug": "گوشی-موبایل",
                          "children": [],
                          "parent": "mobile-tablet",
                          "second_name": "موبایل",
                          "url": {
                              "display": "لوازم-الکترونیکی/گوشی-موبایل-تبلت",
                              "order": 1
                          }
                      },
                      {
                          "name": "تبلت",
                          "icon": "",
                          "id": 118,
                          "slug": "tablet",
                          "second_slug": "تبلت",
                          "children": [],
                          "parent": "mobile-tablet",
                          "second_name": "تبلت",
                          "url": {
                              "display": "لوازم-الکترونیکی/گوشی-موبایل-تبلت",
                              "order": 1
                          }
                      },
                      {
                          "name": "لوازم جانبی موبایل و تبلت",
                          "icon": "",
                          "id": 119,
                          "slug": "mobile-tablet-accessories",
                          "second_slug": "لوازم-جانبی-موبایل-تبلت",
                          "children": [],
                          "parent": "mobile-tablet",
                          "second_name": "لوازم جانبی موبایل و تبلت",
                          "url": {
                              "display": "لوازم-الکترونیکی/گوشی-موبایل-تبلت/لوازم-جانبی-موبایل-تبلت",
                              "order": 1
                          }
                      },
                      {
                          "name": "سیم کارت",
                          "icon": "",
                          "id": 120,
                          "slug": "sim-card",
                          "second_slug": "سیم-کارت",
                          "children": [],
                          "parent": "mobile-tablet",
                          "second_name": "سیم کارت ",
                          "url": {
                              "display": "لوازم-الکترونیکی/گوشی-موبایل-تبلت/سیم-کارت",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های موبایل و تبلت",
                          "icon": "",
                          "id": 37,
                          "slug": "mobile-tablet",
                          "second_slug": "گوشی-موبایل-تبلت,موبایل-تبلت",
                          "children": [],
                          "parent": "mobile-tablet",
                          "second_name": "موبایل و تبلت",
                          "url": {
                              "display": "لوازم-الکترونیکی/گوشی-موبایل-تبلت/گوشی-موبایل-تبلت",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "electronic-devices",
                  "second_name": "موبایل و تبلت",
                  "url": {
                      "display": "لوازم-الکترونیکی/گوشی-موبایل-تبلت",
                      "order": 1
                  }
              },
              {
                  "name": "رایانه",
                  "icon": "",
                  "id": 24,
                  "slug": "computers",
                  "second_slug": "کامپیوتر,رایانه",
                  "children": [
                      {
                          "name": "رایانه همراه",
                          "icon": "",
                          "id": 26,
                          "slug": "laptop-notebook-macbook",
                          "second_slug": "لپ-تاپ,رایانه-همراه",
                          "children": [],
                          "parent": "computers",
                          "second_name": "رایانه همراه",
                          "url": {
                              "display": "لوازم-الکترونیکی/کامپیوتر/لپ-تاپ",
                              "order": 1
                          }
                      },
                      {
                          "name": "رایانه رومیزی",
                          "icon": "",
                          "id": 25,
                          "slug": "desktop-computer",
                          "second_slug": "رایانه-رومیزی",
                          "children": [],
                          "parent": "computers",
                          "second_name": "رایانه رومیزی",
                          "url": {
                              "display": "لوازم-الکترونیکی/کامپیوتر/رایانه-رومیزی",
                              "order": 1
                          }
                      },
                      {
                          "name": "قطعات و لوازم جانبی",
                          "icon": "",
                          "id": 177,
                          "slug": "computer-parts-accessories",
                          "second_slug": "قطعات-لوازم-جانبی",
                          "children": [],
                          "parent": "computers",
                          "second_name": "قطعات و لوازم جانبی رایانه",
                          "url": {
                              "display": "لوازم-الکترونیکی/کامپیوتر/قطعات-لوازم-جانبی",
                              "order": 1
                          }
                      },
                      {
                          "name": "مودم و تجهیزات شبکه",
                          "icon": "",
                          "id": 178,
                          "slug": "modem-network-equipments",
                          "second_slug": "مودم-تجهیزات-شبکه",
                          "children": [],
                          "parent": "computers",
                          "second_name": "مودم و تجهیزات شبکه رایانه",
                          "url": {
                              "display": "لوازم-الکترونیکی/کامپیوتر/مودم-تجهیزات-شبکه",
                              "order": 1
                          }
                      },
                      {
                          "name": "پرینتر/اسکنر/کپی/فکس",
                          "icon": "",
                          "id": 176,
                          "slug": "printer-scanner-fax",
                          "second_slug": "پرینتر-اسکنر-کپی-فکس",
                          "children": [],
                          "parent": "computers",
                          "second_name": "پرینتر، اسکنر، کپی، فکس",
                          "url": {
                              "display": "لوازم-الکترونیکی/کامپیوتر/پرینتر-اسکنر-کپی-فکس",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های رایانه",
                          "icon": "",
                          "id": 24,
                          "slug": "computers",
                          "second_slug": "کامپیوتر,رایانه",
                          "children": [],
                          "parent": "computers",
                          "second_name": "رایانه",
                          "url": {
                              "display": "لوازم-الکترونیکی/کامپیوتر/کامپیوتر",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "electronic-devices",
                  "second_name": "رایانه",
                  "url": {
                      "display": "لوازم-الکترونیکی/کامپیوتر",
                      "order": 1
                  }
              },
              {
                  "name": "کنسول، بازی‌ ویدئویی و آنلاین",
                  "icon": "",
                  "id": 186,
                  "slug": "game-consoles",
                  "second_slug": "کنسول-بازی-ویدئویی-آنلاین",
                  "children": [],
                  "parent": "electronic-devices",
                  "second_name": "کنسول، بازی ویدئویی و آنلاین",
                  "url": {
                      "display": "لوازم-الکترونیکی/کنسول-بازی-ویدئویی-آنلاین",
                      "order": 1
                  }
              },
              {
                  "name": "صوتی و تصویری",
                  "icon": "",
                  "id": 30,
                  "slug": "video-audio-device",
                  "second_slug": "صوتی-تصویری",
                  "children": [
                      {
                          "name": "فیلم و موسیقی",
                          "icon": "",
                          "id": 31,
                          "slug": "film-music",
                          "second_slug": "فیلم-موسیقی",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "فیلم و موسیقی",
                          "url": {
                              "display": "لوازم-الکترونیکی/صوتی-تصویری/فیلم-موسیقی",
                              "order": 1
                          }
                      },
                      {
                          "name": "دوربین عکاسی و فیلم‌برداری",
                          "icon": "",
                          "id": 32,
                          "slug": "camera",
                          "second_slug": "دوربین-عکاسی-فیلم-برداری",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "دوربین عکاسی و فیلم‌برداری",
                          "url": {
                              "display": "لوازم-الکترونیکی/صوتی-تصویری/دوربین-عکاسی-فیلم-برداری",
                              "order": 1
                          }
                      },
                      {
                          "name": "پخش‌کننده همراه",
                          "icon": "",
                          "id": 33,
                          "slug": "headphone-speaker-microphone",
                          "second_slug": "پخش-کننده-همراه",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "پخش‌کننده همراه",
                          "url": {
                              "display": "لوازم-الکترونیکی/صوتی-تصویری/پخش-کننده-همراه",
                              "order": 1
                          }
                      },
                      {
                          "name": "سیستم صوتی خانگی",
                          "icon": "",
                          "id": 34,
                          "slug": "home-audio-system",
                          "second_slug": "سیستم-صوتی-خانگی",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "سیستم صوتی خانگی",
                          "url": {
                              "display": "لوازم-الکترونیکی/صوتی-تصویری/سیستم-صوتی-خانگی",
                              "order": 1
                          }
                      },
                      {
                          "name": "ویدئو و پخش کننده DVD",
                          "icon": "",
                          "id": 35,
                          "slug": "dvd-bluray-player",
                          "second_slug": "ویدئو-پخش-کننده-DVD",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "ویدئو و پخش کننده DVD",
                          "url": {
                              "display": "لوازم-الکترونیکی/صوتی-تصویری/ویدئو-پخش-کننده-DVD",
                              "order": 1
                          }
                      },
                      {
                          "name": "تلویزیون و پروژکتور",
                          "icon": "",
                          "id": 36,
                          "slug": "tv-projector",
                          "second_slug": "تلویزیون-پروژکتور",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "تلویزیون و پروژکتور",
                          "url": {
                              "display": "لوازم-الکترونیکی/صوتی-تصویری/تلویزیون-پروژکتور",
                              "order": 1
                          }
                      },
                      {
                          "name": "دوربین مداربسته",
                          "icon": "",
                          "id": 241,
                          "slug": "cctv",
                          "second_slug": "دوربین مداربسته",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "دوربین مداربسته",
                          "url": {
                              "display": "دوربین مداربسته",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های صوتی و تصویری",
                          "icon": "",
                          "id": 30,
                          "slug": "video-audio-device",
                          "second_slug": "صوتی-تصویری",
                          "children": [],
                          "parent": "video-audio-device",
                          "second_name": "صوتی و تصویری",
                          "url": {
                              "display": "لوازم-الکترونیکی/صوتی-تصویری",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "electronic-devices",
                  "second_name": "صوتی و تصویری",
                  "url": {
                      "display": "لوازم-الکترونیکی/صوتی-تصویری",
                      "order": 1
                  }
              },
              {
                  "name": "تلفن رومیزی",
                  "icon": "",
                  "id": 233,
                  "slug": "telephone",
                  "second_slug": "تلفن-رومیزی",
                  "children": [],
                  "parent": "electronic-devices",
                  "second_name": "تلفن رومیزی",
                  "url": {
                      "display": "لوازم-الکترونیکی/تلفن-رومیزی",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های لوازم الکترونیکی",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/electronic-devices_%s.png",
                  "id": 1,
                  "slug": "electronic-devices",
                  "second_slug": "لوازم-الکترونیکی",
                  "children": [],
                  "parent": "electronic-devices",
                  "second_name": "لوازم الکترونیکی",
                  "url": {
                      "display": "لوازم-الکترونیکی",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "لوازم الکترونیکی",
          "url": {
              "display": "لوازم-الکترونیکی",
              "order": 1
          }
      },
      {
          "name": "مربوط به خانه",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/home-appliance_%s.png",
          "id": 2,
          "slug": "home-and-kitchen",
          "second_slug": "دکوراسیون-لوازم-خانگی,مربوط-به-خانه",
          "children": [
              {
                  "name": "وسایل و تزئینات خانه",
                  "icon": "",
                  "id": 4,
                  "slug": "home-decor-furniture",
                  "second_slug": "وسایل-تزئینات-خانه",
                  "children": [
                      {
                          "name": "تزئینی و آثار هنری",
                          "icon": "",
                          "id": 52,
                          "slug": "art-decorative",
                          "second_slug": "تزئینی-آثار-هنری",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "تزئینی و آثار هنری",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/تزئینی-آثار-هنری",
                              "order": 1
                          }
                      },
                      {
                          "name": "لوازم روشنایی",
                          "icon": "",
                          "id": 53,
                          "slug": "lighting",
                          "second_slug": "لوازم-روشنایی",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "لوازم روشنایی خانه",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/لوازم-روشنایی",
                              "order": 1
                          }
                      },
                      {
                          "name": "میز و صندلی",
                          "icon": "",
                          "id": 54,
                          "slug": "table-desk-chair",
                          "second_slug": "میز-صندلی",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "میز و صندلی ",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/میز-صندلی",
                              "order": 1
                          }
                      },
                      {
                          "name": "فرش و گلیم",
                          "icon": "",
                          "id": 55,
                          "slug": "carpets",
                          "second_slug": "فرش-گلیم",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "فرش و گلیم",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/فرش-گلیم",
                              "order": 1
                          }
                      },
                      {
                          "name": "کمد و بوفه",
                          "icon": "",
                          "id": 56,
                          "slug": "closet-storage",
                          "second_slug": "کمد-بوفه",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "کمد و بوفه",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/کمد-بوفه",
                              "order": 1
                          }
                      },
                      {
                          "name": "پرده و رومیزی",
                          "icon": "",
                          "id": 57,
                          "slug": "curtain-tablecloth",
                          "second_slug": "پرده-رومیزی",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "پرده و رومیزی",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/پرده-رومیزی",
                              "order": 1
                          }
                      },
                      {
                          "name": "تخت و اتاق خواب",
                          "icon": "",
                          "id": 58,
                          "slug": "bedroom-accessories",
                          "second_slug": "تخت-اتاق-خواب",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "وسایل تخت و اتاق خواب",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/تخت-اتاق-خواب",
                              "order": 1
                          }
                      },
                      {
                          "name": "مبلمان و صندلی راحتی",
                          "icon": "",
                          "id": 59,
                          "slug": "sofa-armchair",
                          "second_slug": "مبلمان-صندلی-راحتی",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "مبلمان و صندلی راحتی",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/مبلمان-صندلی-راحتی",
                              "order": 1
                          }
                      },
                      {
                          "name": "میز تلویزیون و وسایل سیستم پخش",
                          "icon": "",
                          "id": 60,
                          "slug": "tv-stand",
                          "second_slug": "میز-تلویزیون-وسایل-سیستم-پخش",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "میز تلویزیون و وسایل سیستم پخش",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه/میز-تلویزیون-وسایل-سیستم-پخش",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های وسایل و تزئینات خانه",
                          "icon": "",
                          "id": 4,
                          "slug": "home-decor-furniture",
                          "second_slug": "وسایل-تزئینات-خانه",
                          "children": [],
                          "parent": "home-decor-furniture",
                          "second_name": "وسایل و تزئینات خانه",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "home-and-kitchen",
                  "second_name": "وسایل و تزئینات خانه",
                  "url": {
                      "display": "دکوراسیون-لوازم-خانگی/وسایل-تزئینات-خانه",
                      "order": 1
                  }
              },
              {
                  "name": "وسایل آشپزخانه",
                  "icon": "",
                  "id": 5,
                  "slug": "kitchen-appliances",
                  "second_slug": "وسایل-آشپزخانه",
                  "children": [
                      {
                          "name": "ماشین ظرفشویی",
                          "icon": "",
                          "id": 61,
                          "slug": "dishwasher",
                          "second_slug": "ماشین-ظرفشویی",
                          "children": [],
                          "parent": "kitchen-appliances",
                          "second_name": "ماشین ظرفشویی",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-آشپزخانه/ماشین-ظرفشویی",
                              "order": 1
                          }
                      },
                      {
                          "name": "یخچال و فریزر",
                          "icon": "",
                          "id": 62,
                          "slug": "refrigerator-freezer",
                          "second_slug": "یخچال-فریزر",
                          "children": [],
                          "parent": "kitchen-appliances",
                          "second_name": "یخچال و فریزر",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-آشپزخانه/یخچال-فریزر",
                              "order": 1
                          }
                      },
                      {
                          "name": "وسایل آشپزی و غذاخوری",
                          "icon": "",
                          "id": 63,
                          "slug": "kitchen-accessories",
                          "second_slug": "وسایل-آشپزی-غذاخوری",
                          "children": [],
                          "parent": "kitchen-appliances",
                          "second_name": "وسایل آشپزی و غذاخوری",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-آشپزخانه/وسایل-آشپزی-غذاخوری",
                              "order": 1
                          }
                      },
                      {
                          "name": "مایکروویو و گاز",
                          "icon": "",
                          "id": 64,
                          "slug": "microwave-stove",
                          "second_slug": "مایکروویو-گاز",
                          "children": [],
                          "parent": "kitchen-appliances",
                          "second_name": "مایکروویو و گاز",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-آشپزخانه/مایکروویو-گاز",
                              "order": 1
                          }
                      },
                      {
                          "name": "ماشین لباسشویی و خشک کننده",
                          "icon": "",
                          "id": 65,
                          "slug": "washing-machine",
                          "second_slug": "ماشین-لباسشویی-خشک-کننده",
                          "children": [],
                          "parent": "kitchen-appliances",
                          "second_name": "ماشین لباسشویی و خشک کننده",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-آشپزخانه/ماشین-لباسشویی-خشک-کننده",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های وسایل آشپزخانه",
                          "icon": "",
                          "id": 5,
                          "slug": "kitchen-appliances",
                          "second_slug": "وسایل-آشپزخانه",
                          "children": [],
                          "parent": "kitchen-appliances",
                          "second_name": "وسایل آشپزخانه",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/وسایل-آشپزخانه",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "home-and-kitchen",
                  "second_name": "وسایل آشپزخانه",
                  "url": {
                      "display": "دکوراسیون-لوازم-خانگی/وسایل-آشپزخانه",
                      "order": 1
                  }
              },
              {
                  "name": "ابزار",
                  "icon": "",
                  "id": 81,
                  "slug": "home-appliances",
                  "second_slug": "ابزار",
                  "children": [
                      {
                          "name": "نظافت و خیاطی و اتو",
                          "icon": "",
                          "id": 187,
                          "slug": "vacuum-cleaner-sewing-machine-iron",
                          "second_slug": "نظافت-خیاطی-اتو",
                          "children": [],
                          "parent": "home-appliances",
                          "second_name": "ابزار نظافت، خیاطی و اتو",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ابزار/نظافت-خیاطی-اتو",
                              "order": 1
                          }
                      },
                      {
                          "name": "تعمیرات",
                          "icon": "",
                          "id": 188,
                          "slug": "power-and-hand-tools",
                          "second_slug": "تعمیرات",
                          "children": [],
                          "parent": "home-appliances",
                          "second_name": "ابزار تعمیرات",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ابزار/تعمیرات",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های ابزار",
                          "icon": "",
                          "id": 81,
                          "slug": "home-appliances",
                          "second_slug": "ابزار",
                          "children": [],
                          "parent": "home-appliances",
                          "second_name": "ابزار",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ابزار",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "home-and-kitchen",
                  "second_name": "ابزار",
                  "url": {
                      "display": "دکوراسیون-لوازم-خانگی/ابزار",
                      "order": 1
                  }
              },
              {
                  "name": "ساختمان و حیاط",
                  "icon": "",
                  "id": 3,
                  "slug": "building-garden",
                  "second_slug": "ساختمان-حیاط-خانه",
                  "children": [
                      {
                          "name": "سرویس بهداشتی و سونا",
                          "icon": "",
                          "id": 6,
                          "slug": "bathroom-fixtures",
                          "second_slug": "سرویس-بهداشتی-سونا",
                          "children": [],
                          "parent": "building-garden",
                          "second_name": "سرویس بهداشتی و سونا",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ساختمان-حیاط-خانه/سرویس-بهداشتی-سونا",
                              "order": 1
                          }
                      },
                      {
                          "name": "سیستم گرمایشی سرمایشی و گاز",
                          "icon": "",
                          "id": 8,
                          "slug": "heating-cooling-systems",
                          "second_slug": "سیستم-گرمایشی-سرمایشی-گاز",
                          "children": [],
                          "parent": "building-garden",
                          "second_name": "سیستم گرمایشی، سرمایشی و گاز",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ساختمان-حیاط-خانه/سیستم-گرمایشی-سرمایشی-گاز",
                              "order": 1
                          }
                      },
                      {
                          "name": "آشپزخانه",
                          "icon": "",
                          "id": 9,
                          "slug": "kitchen-equipments",
                          "second_slug": "آشپزخانه",
                          "children": [],
                          "parent": "building-garden",
                          "second_name": "وسایل آشپزخانه",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ساختمان-حیاط-خانه/آشپزخانه",
                              "order": 1
                          }
                      },
                      {
                          "name": "حیاط و ایوان",
                          "icon": "",
                          "id": 10,
                          "slug": "patio-balcony",
                          "second_slug": "حیاط-ایوان",
                          "children": [],
                          "parent": "building-garden",
                          "second_name": "وسایل حیاط و ایوان",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ساختمان-حیاط-خانه/حیاط-ایوان",
                              "order": 1
                          }
                      },
                      {
                          "name": "ابزار باغبانی",
                          "icon": "",
                          "id": 11,
                          "slug": "garden-tools",
                          "second_slug": "ابزار-باغبانی",
                          "children": [],
                          "parent": "building-garden",
                          "second_name": "ابزار باغبانی",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ساختمان-حیاط-خانه/ابزار-باغبانی",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های ساختمان و حیاط",
                          "icon": "",
                          "id": 3,
                          "slug": "building-garden",
                          "second_slug": "ساختمان-حیاط-خانه",
                          "children": [],
                          "parent": "building-garden",
                          "second_name": "ساختمان و حیاط",
                          "url": {
                              "display": "دکوراسیون-لوازم-خانگی/ساختمان-حیاط-خانه",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "home-and-kitchen",
                  "second_name": "ساختمان و حیاط",
                  "url": {
                      "display": "دکوراسیون-لوازم-خانگی/ساختمان-حیاط-خانه",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های مربوط به خانه",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/home-appliance_%s.png",
                  "id": 2,
                  "slug": "home-and-kitchen",
                  "second_slug": "دکوراسیون-لوازم-خانگی,مربوط-به-خانه",
                  "children": [],
                  "parent": "home-and-kitchen",
                  "second_name": "مربوط به خانه",
                  "url": {
                      "display": "دکوراسیون-لوازم-خانگی/دکوراسیون-لوازم-خانگی",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "مربوط به خانه",
          "url": {
              "display": "دکوراسیون-لوازم-خانگی",
              "order": 1
          }
      },
      {
          "name": "خدمات",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/service_%s.png",
          "id": 125,
          "slug": "services",
          "second_slug": "خدمات",
          "children": [
              {
                  "name": "موتور و ماشین",
                  "icon": "",
                  "id": 132,
                  "slug": "vehicles-services",
                  "second_slug": "موتور-ماشین",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات موتور و ماشین",
                  "url": {
                      "display": "خدمات/موتور-ماشین",
                      "order": 1
                  }
              },
              {
                  "name": "پذیرایی/مراسم",
                  "icon": "",
                  "id": 133,
                  "slug": "catering-services",
                  "second_slug": "پذیرایی-مراسم",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات پذیرایی/مراسم",
                  "url": {
                      "display": "خدمات/پذیرایی-مراسم",
                      "order": 1
                  }
              },
              {
                  "name": "خدمات رایانه‌ای و موبایل",
                  "icon": "",
                  "id": 134,
                  "slug": "technology-services",
                  "second_slug": "خدمات-رایانه-موبایل",
                  "children": [
                      {
                          "name": "فروش دامنه و سایت",
                          "icon": "",
                          "id": 204,
                          "slug": "domain-services",
                          "second_slug": "فروش-دامنه-سایت",
                          "children": [],
                          "parent": "technology-services",
                          "second_name": "خدمات فروش دامنه و سایت",
                          "url": {
                              "display": "خدمات/خدمات-رایانه-موبایل/فروش-دامنه-سایت",
                              "order": 1
                          }
                      },
                      {
                          "name": "میزبانی و طراحی سایت",
                          "icon": "",
                          "id": 205,
                          "slug": "website-services",
                          "second_slug": "میزبانی-طراحی-سایت",
                          "children": [],
                          "parent": "technology-services",
                          "second_name": "خدمات میزبانی و طراحی سایت",
                          "url": {
                              "display": "خدمات/خدمات-رایانه-موبایل/میزبانی-طراحی-سایت",
                              "order": 1
                          }
                      },
                      {
                          "name": "خدمات پهنای باند اینترنت",
                          "icon": "",
                          "id": 206,
                          "slug": "internet-services",
                          "second_slug": "خدمات-پهنا-باند-اینترنت",
                          "children": [],
                          "parent": "technology-services",
                          "second_name": "خدمات پهنای باند اینترنت",
                          "url": {
                              "display": "خدمات/خدمات-رایانه-موبایل/خدمات-پهنا-باند-اینترنت",
                              "order": 1
                          }
                      },
                      {
                          "name": "خدمات نرم‌افزار و سخت‌افزار کامپیوتر",
                          "icon": "",
                          "id": 207,
                          "slug": "computer-services",
                          "second_slug": "خدمات-نرم-افزار-سخت-افزار-کامپیوتر",
                          "children": [],
                          "parent": "technology-services",
                          "second_name": "خدمات نرم‌افزار و سخت‌افزار کامپیوتر",
                          "url": {
                              "display": "خدمات/خدمات-رایانه-موبایل/خدمات-نرم-افزار-سخت-افزار-کامپیوتر",
                              "order": 1
                          }
                      },
                      {
                          "name": "تعمیرات نرم‌افزار و سخت‌افزار گوشی موبایل",
                          "icon": "",
                          "id": 208,
                          "slug": "mobile-services",
                          "second_slug": "تعمیرات-نرم-افزار-سخت-افزار-گوشی-موبایل",
                          "children": [],
                          "parent": "technology-services",
                          "second_name": "تعمیرات نرم‌افزار و سخت‌افزار  موبایل",
                          "url": {
                              "display": "خدمات/خدمات-رایانه-موبایل/تعمیرات-نرم-افزار-سخت-افزار-گوشی-موبایل",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های خدمات رایانه‌ای و موبایل",
                          "icon": "",
                          "id": 134,
                          "slug": "technology-services",
                          "second_slug": "خدمات-رایانه-موبایل",
                          "children": [],
                          "parent": "technology-services",
                          "second_name": "خدمات رایانه‌ای و موبایل",
                          "url": {
                              "display": "خدمات/خدمات-رایانه-موبایل",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "services",
                  "second_name": "خدمات رایانه‌ای و موبایل",
                  "url": {
                      "display": "خدمات/خدمات-رایانه-موبایل",
                      "order": 1
                  }
              },
              {
                  "name": "مالی/حسابداری/بیمه",
                  "icon": "",
                  "id": 135,
                  "slug": "financial-services",
                  "second_slug": "مالی-حسابداری-بیمه",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات مالی/حسابداری/بیمه",
                  "url": {
                      "display": "خدمات/مالی-حسابداری-بیمه",
                      "order": 1
                  }
              },
              {
                  "name": "حمل و نقل",
                  "icon": "",
                  "id": 136,
                  "slug": "transport-logistic-services",
                  "second_slug": "خدمات-حمل-نقل",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات حمل و نقل",
                  "url": {
                      "display": "خدمات/خدمات-حمل-نقل",
                      "order": 1
                  }
              },
              {
                  "name": "پیشه و مهارت",
                  "icon": "",
                  "id": 137,
                  "slug": "craft-skill-services",
                  "second_slug": "پیشه-مهارت",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات پیشه و مهارت",
                  "url": {
                      "display": "خدمات/پیشه-مهارت",
                      "order": 1
                  }
              },
              {
                  "name": "آرایشگری و زیبایی",
                  "icon": "",
                  "id": 138,
                  "slug": "beauty-services",
                  "second_slug": "آرایشگری-زیبایی",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات آرایشگری و زیبایی",
                  "url": {
                      "display": "خدمات/آرایشگری-زیبایی",
                      "order": 1
                  }
              },
              {
                  "name": "سرگرمی",
                  "icon": "",
                  "id": 139,
                  "slug": "entertaining-services",
                  "second_slug": "سرگرمی",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات سرگرمی",
                  "url": {
                      "display": "خدمات/سرگرمی",
                      "order": 1
                  }
              },
              {
                  "name": "نظافت",
                  "icon": "",
                  "id": 140,
                  "slug": "cleaning-services",
                  "second_slug": "نظافت",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات نظافت",
                  "url": {
                      "display": "خدمات/نظافت",
                      "order": 1
                  }
              },
              {
                  "name": "باغبانی و درختکاری",
                  "icon": "",
                  "id": 141,
                  "slug": "gardening-services",
                  "second_slug": "باغبانی-درختکاری",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات باغبانی و درختکاری",
                  "url": {
                      "display": "خدمات/باغبانی-درختکاری",
                      "order": 1
                  }
              },
              {
                  "name": "آموزشی",
                  "icon": "",
                  "id": 142,
                  "slug": "teaching-services",
                  "second_slug": "خدمات-آموزشی",
                  "children": [
                      {
                          "name": "زبان خارجی",
                          "icon": "",
                          "id": 166,
                          "slug": "foreign-language",
                          "second_slug": "زبان-خارجی",
                          "children": [],
                          "parent": "teaching-services",
                          "second_name": "خدمات آموزش زبان خارجی",
                          "url": {
                              "display": "خدمات/خدمات-آموزشی/زبان-خارجی",
                              "order": 1
                          }
                      },
                      {
                          "name": "دروس مدرسه و دانشگاه",
                          "icon": "",
                          "id": 167,
                          "slug": "educational-teaching",
                          "second_slug": "دروس-مدرسه-دانشگاه",
                          "children": [],
                          "parent": "teaching-services",
                          "second_name": "خدمات آموزش دروس مدرسه و دانشگاه",
                          "url": {
                              "display": "خدمات/خدمات-آموزشی/دروس-مدرسه-دانشگاه",
                              "order": 1
                          }
                      },
                      {
                          "name": "نرم‌افزار",
                          "icon": "",
                          "id": 168,
                          "slug": "software-teaching",
                          "second_slug": "نرم-افزار",
                          "children": [],
                          "parent": "teaching-services",
                          "second_name": "خدمات آموزش نرم‌افزار",
                          "url": {
                              "display": "خدمات/خدمات-آموزشی/نرم-افزار",
                              "order": 1
                          }
                      },
                      {
                          "name": "هنری",
                          "icon": "",
                          "id": 169,
                          "slug": "art-teaching",
                          "second_slug": "هنری",
                          "children": [],
                          "parent": "teaching-services",
                          "second_name": "خدمات آموزش هنری",
                          "url": {
                              "display": "خدمات/خدمات-آموزشی/هنری",
                              "order": 1
                          }
                      },
                      {
                          "name": "ورزشی",
                          "icon": "",
                          "id": 170,
                          "slug": "sports-teaching",
                          "second_slug": "خدمات-ورزشی",
                          "children": [],
                          "parent": "teaching-services",
                          "second_name": "خدمات آموزش ورزشی",
                          "url": {
                              "display": "خدمات/خدمات-آموزشی/خدمات-ورزشی",
                              "order": 1
                          }
                      },
                      {
                          "name": "مشاوره تحصیلی",
                          "icon": "",
                          "id": 171,
                          "slug": "educational-consulting",
                          "second_slug": "مشاوره-تحصیلی",
                          "children": [],
                          "parent": "teaching-services",
                          "second_name": "خدمات مشاوره تحصیلی",
                          "url": {
                              "display": "خدمات/خدمات-آموزشی/مشاوره-تحصیلی",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های آموزشی",
                          "icon": "",
                          "id": 142,
                          "slug": "teaching-services",
                          "second_slug": "خدمات-آموزشی",
                          "children": [],
                          "parent": "teaching-services",
                          "second_name": "خدمات آموزشی",
                          "url": {
                              "display": "خدمات/خدمات-آموزشی",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "services",
                  "second_name": "خدمات آموزشی",
                  "url": {
                      "display": "خدمات/خدمات-آموزشی",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های خدمات",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/service_%s.png",
                  "id": 125,
                  "slug": "services",
                  "second_slug": "خدمات",
                  "children": [],
                  "parent": "services",
                  "second_name": "خدمات",
                  "url": {
                      "display": "خدمات",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "خدمات",
          "url": {
              "display": "خدمات",
              "order": 1
          }
      },
      {
          "name": "وسایل شخصی",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/personal-stuff_%s.png",
          "id": 12,
          "slug": "personal-goods",
          "second_slug": "وسایل-شخصی",
          "children": [
              {
                  "name": "کیف، کفش و لباس",
                  "icon": "",
                  "id": 13,
                  "slug": "apparel",
                  "second_slug": "کیف-کفش-لباس",
                  "children": [
                      {
                          "name": "کیف/کفش/کمربند",
                          "icon": "",
                          "id": 174,
                          "slug": "bag-shoes-belt",
                          "second_slug": "کیف-کفش-کمربند",
                          "children": [],
                          "parent": "apparel",
                          "second_name": "کیف، کفش وکمربند",
                          "url": {
                              "display": "وسایل-شخصی/کیف-کفش-لباس/کیف-کفش-کمربند",
                              "order": 1
                          }
                      },
                      {
                          "name": "لباس",
                          "icon": "",
                          "id": 175,
                          "slug": "clothing",
                          "second_slug": "لباس",
                          "children": [],
                          "parent": "apparel",
                          "second_name": "لباس",
                          "url": {
                              "display": "وسایل-شخصی/کیف-کفش-لباس",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های کیف، کفش و لباس",
                          "icon": "",
                          "id": 13,
                          "slug": "apparel",
                          "second_slug": "کیف-کفش-لباس",
                          "children": [],
                          "parent": "apparel",
                          "second_name": "کیف، کفش و لباس",
                          "url": {
                              "display": "وسایل-شخصی/کیف-کفش-لباس",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "personal-goods",
                  "second_name": "کیف، کفش و لباس",
                  "url": {
                      "display": "وسایل-شخصی/کیف-کفش-لباس",
                      "order": 1
                  }
              },
              {
                  "name": "تزیینی",
                  "icon": "",
                  "id": 14,
                  "slug": "accessories",
                  "second_slug": "تزیینی",
                  "children": [
                      {
                          "name": "ساعت",
                          "icon": "",
                          "id": 15,
                          "slug": "watches",
                          "second_slug": "ساعت",
                          "children": [],
                          "parent": "accessories",
                          "second_name": "ساعت",
                          "url": {
                              "display": "وسایل-شخصی/تزیینی/ساعت",
                              "order": 1
                          }
                      },
                      {
                          "name": "جواهرات",
                          "icon": "",
                          "id": 16,
                          "slug": "jewelry",
                          "second_slug": "جواهرات",
                          "children": [],
                          "parent": "accessories",
                          "second_name": "جواهرات",
                          "url": {
                              "display": "وسایل-شخصی/تزیینی/جواهرات",
                              "order": 1
                          }
                      },
                      {
                          "name": "بدلیجات",
                          "icon": "",
                          "id": 172,
                          "slug": "trinket",
                          "second_slug": "بدلیجات",
                          "children": [],
                          "parent": "accessories",
                          "second_name": "بدلیجات",
                          "url": {
                              "display": "وسایل-شخصی/تزیینی/بدلیجات",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های تزیینی",
                          "icon": "",
                          "id": 14,
                          "slug": "accessories",
                          "second_slug": "تزیینی",
                          "children": [],
                          "parent": "accessories",
                          "second_name": "تزیینی",
                          "url": {
                              "display": "وسایل-شخصی/تزیینی",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "personal-goods",
                  "second_name": "تزیینی",
                  "url": {
                      "display": "وسایل-شخصی/تزیینی",
                      "order": 1
                  }
              },
              {
                  "name": "آرایشی، بهداشتی و درمانی",
                  "icon": "",
                  "id": 173,
                  "slug": "beauty-and-personal-care",
                  "second_slug": "آرایشی-بهداشتی-درمانی",
                  "children": [],
                  "parent": "personal-goods",
                  "second_name": "وسایل آرایشی، بهداشتی و درمانی",
                  "url": {
                      "display": "وسایل-شخصی/آرایشی-بهداشتی-درمانی",
                      "order": 1
                  }
              },
              {
                  "name": "کفش و لباس بچه",
                  "icon": "",
                  "id": 18,
                  "slug": "child-apparel",
                  "second_slug": "کفش-لباس-بچه",
                  "children": [],
                  "parent": "personal-goods",
                  "second_name": "کفش و لباس بچه",
                  "url": {
                      "display": "وسایل-شخصی/کفش-لباس-بچه",
                      "order": 1
                  }
              },
              {
                  "name": "وسایل بچه و اسباب بازی",
                  "icon": "",
                  "id": 19,
                  "slug": "child-products",
                  "second_slug": "وسایل-بچه-اسباب-بازی",
                  "children": [
                      {
                          "name": "اسباب بازی",
                          "icon": "",
                          "id": 20,
                          "slug": "child-toys",
                          "second_slug": "اسباب-بازی-بچه",
                          "children": [],
                          "parent": "child-products",
                          "second_name": "اسباب بازی بچه",
                          "url": {
                              "display": "وسایل-شخصی/وسایل-بچه-اسباب-بازی/اسباب-بازی-بچه",
                              "order": 1
                          }
                      },
                      {
                          "name": "کالسکه و لوازم جانبی",
                          "icon": "",
                          "id": 21,
                          "slug": "stroller",
                          "second_slug": "کالسکه-لوازم-جانبی",
                          "children": [],
                          "parent": "child-products",
                          "second_name": "کالسکه و لوازم جانبی",
                          "url": {
                              "display": "وسایل-شخصی/وسایل-بچه-اسباب-بازی/کالسکه-لوازم-جانبی",
                              "order": 1
                          }
                      },
                      {
                          "name": "صندلی بچه",
                          "icon": "",
                          "id": 22,
                          "slug": "child-furniture",
                          "second_slug": "صندلی-بچه",
                          "children": [],
                          "parent": "child-products",
                          "second_name": "صندلی بچه",
                          "url": {
                              "display": "وسایل-شخصی/وسایل-بچه-اسباب-بازی/صندلی-بچه",
                              "order": 1
                          }
                      },
                      {
                          "name": "اسباب و اثاث بچه",
                          "icon": "",
                          "id": 23,
                          "slug": "child-stuff",
                          "second_slug": "اسباب-اثاث-بچه",
                          "children": [],
                          "parent": "child-products",
                          "second_name": "اسباب و اثاث بچه",
                          "url": {
                              "display": "وسایل-شخصی/وسایل-بچه-اسباب-بازی/اسباب-اثاث-بچه",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های وسایل بچه و اسباب بازی",
                          "icon": "",
                          "id": 19,
                          "slug": "child-products",
                          "second_slug": "وسایل-بچه-اسباب-بازی",
                          "children": [],
                          "parent": "child-products",
                          "second_name": "وسایل بچه و اسباب بازی",
                          "url": {
                              "display": "وسایل-شخصی/وسایل-بچه-اسباب-بازی",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "personal-goods",
                  "second_name": "وسایل بچه و اسباب بازی",
                  "url": {
                      "display": "وسایل-شخصی/وسایل-بچه-اسباب-بازی",
                      "order": 1
                  }
              },
              {
                  "name": "لوازم التحریر",
                  "icon": "",
                  "id": 244,
                  "slug": "stationery",
                  "second_slug": "لوازم التحریر",
                  "children": [],
                  "parent": "personal-goods",
                  "second_name": "لوازم التحریر",
                  "url": {
                      "display": "لوازم التحریر",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های وسایل شخصی",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/personal-stuff_%s.png",
                  "id": 12,
                  "slug": "personal-goods",
                  "second_slug": "وسایل-شخصی",
                  "children": [],
                  "parent": "personal-goods",
                  "second_name": "وسایل شخصی",
                  "url": {
                      "display": "وسایل-شخصی",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "وسایل شخصی",
          "url": {
              "display": "وسایل-شخصی",
              "order": 1
          }
      },
      {
          "name": "سرگرمی و فراغت",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/entertainment_%s.png",
          "id": 38,
          "slug": "entertainment",
          "second_slug": "سرگرمی-فراغت",
          "children": [
              {
                  "name": "بلیط",
                  "icon": "",
                  "id": 39,
                  "slug": "ticket",
                  "second_slug": "بلیط",
                  "children": [
                      {
                          "name": "کنسرت",
                          "icon": "",
                          "id": 40,
                          "slug": "concert-ticket",
                          "second_slug": "کنسرت",
                          "children": [],
                          "parent": "ticket",
                          "second_name": "بلیط کنسرت",
                          "url": {
                              "display": "سرگرمی-فراغت/بلیط/کنسرت",
                              "order": 1
                          }
                      },
                      {
                          "name": "تئاتر و سینما",
                          "icon": "",
                          "id": 41,
                          "slug": "theatre-cinema-ticket",
                          "second_slug": "تئاتر-سینما",
                          "children": [],
                          "parent": "ticket",
                          "second_name": "بلیط تئاتر و سینما",
                          "url": {
                              "display": "سرگرمی-فراغت/بلیط/تئاتر-سینما",
                              "order": 1
                          }
                      },
                      {
                          "name": "کارت هدیه و تخفیف",
                          "icon": "",
                          "id": 42,
                          "slug": "discount-gift-card",
                          "second_slug": "کارت-هدیه-تخفیف",
                          "children": [],
                          "parent": "ticket",
                          "second_name": "کارت هدیه و تخفیف",
                          "url": {
                              "display": "سرگرمی-فراغت/بلیط/کارت-هدیه-تخفیف",
                              "order": 1
                          }
                      },
                      {
                          "name": "اماکن و مسابقات ورزشی",
                          "icon": "",
                          "id": 180,
                          "slug": "match-sport-ticket",
                          "second_slug": "اماکن-مسابقات-ورزشی",
                          "children": [],
                          "parent": "ticket",
                          "second_name": "بلیط اماکن و مسابقات ورزشی",
                          "url": {
                              "display": "سرگرمی-فراغت/بلیط/اماکن-مسابقات-ورزشی",
                              "order": 1
                          }
                      },
                      {
                          "name": "ورزشی",
                          "icon": "",
                          "id": 43,
                          "slug": "sport-ticket",
                          "second_slug": "ورزشی",
                          "children": [],
                          "parent": "ticket",
                          "second_name": "بلیط ورزشی",
                          "url": {
                              "display": "سرگرمی-فراغت/بلیط/ورزشی",
                              "order": 1
                          }
                      },
                      {
                          "name": "اتوبوس، مترو و قطار",
                          "icon": "",
                          "id": 179,
                          "slug": "travel-ticket",
                          "second_slug": "اتوبوس-مترو-قطار",
                          "children": [],
                          "parent": "ticket",
                          "second_name": "بلیط اتوبوس، مترو و قطار",
                          "url": {
                              "display": "سرگرمی-فراغت/بلیط/اتوبوس-مترو-قطار",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های بلیط",
                          "icon": "",
                          "id": 39,
                          "slug": "ticket",
                          "second_slug": "بلیط",
                          "children": [],
                          "parent": "ticket",
                          "second_name": "بلیط",
                          "url": {
                              "display": "سرگرمی-فراغت/بلیط",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "entertainment",
                  "second_name": "بلیط",
                  "url": {
                      "display": "سرگرمی-فراغت/بلیط",
                      "order": 1
                  }
              },
              {
                  "name": "تور و چارتر",
                  "icon": "",
                  "id": 189,
                  "slug": "tours",
                  "second_slug": "تور-چارتر",
                  "children": [],
                  "parent": "entertainment",
                  "second_name": "تور و چارتر",
                  "url": {
                      "display": "سرگرمی-فراغت/تور-چارتر",
                      "order": 1
                  }
              },
              {
                  "name": "کتاب و مجله",
                  "icon": "",
                  "id": 45,
                  "slug": "publication",
                  "second_slug": "کتاب-مجله",
                  "children": [
                      {
                          "name": "آموزشی",
                          "icon": "",
                          "id": 181,
                          "slug": "educational-book",
                          "second_slug": "کتاب-مجله-آموزشی",
                          "children": [],
                          "parent": "publication",
                          "second_name": "کتاب و مجله آموزشی",
                          "url": {
                              "display": "سرگرمی-فراغت/کتاب-مجله/کتاب-مجله-آموزشی",
                              "order": 1
                          }
                      },
                      {
                          "name": "ادبی",
                          "icon": "",
                          "id": 183,
                          "slug": "literary-book",
                          "second_slug": "ادبی",
                          "children": [],
                          "parent": "publication",
                          "second_name": "کتاب و مجله ادبی",
                          "url": {
                              "display": "سرگرمی-فراغت/کتاب-مجله/ادبی",
                              "order": 1
                          }
                      },
                      {
                          "name": "تاریخی",
                          "icon": "",
                          "id": 182,
                          "slug": "historical-book",
                          "second_slug": "تاریخی",
                          "children": [],
                          "parent": "publication",
                          "second_name": "کتاب و مجله تاریخی",
                          "url": {
                              "display": "سرگرمی-فراغت/کتاب-مجله/تاریخی",
                              "order": 1
                          }
                      },
                      {
                          "name": "مذهبی",
                          "icon": "",
                          "id": 184,
                          "slug": "religious-book",
                          "second_slug": "مذهبی",
                          "children": [],
                          "parent": "publication",
                          "second_name": "کتاب و مجله مذهبی",
                          "url": {
                              "display": "سرگرمی-فراغت/کتاب-مجله/مذهبی",
                              "order": 1
                          }
                      },
                      {
                          "name": "مجلات",
                          "icon": "",
                          "id": 185,
                          "slug": "magazine",
                          "second_slug": "مجلات",
                          "children": [],
                          "parent": "publication",
                          "second_name": "مجلات",
                          "url": {
                              "display": "سرگرمی-فراغت/کتاب-مجله/مجلات",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های کتاب و مجله",
                          "icon": "",
                          "id": 45,
                          "slug": "publication",
                          "second_slug": "کتاب-مجله",
                          "children": [],
                          "parent": "publication",
                          "second_name": "کتاب و مجله",
                          "url": {
                              "display": "سرگرمی-فراغت/کتاب-مجله",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "entertainment",
                  "second_name": "کتاب و مجله",
                  "url": {
                      "display": "سرگرمی-فراغت/کتاب-مجله",
                      "order": 1
                  }
              },
              {
                  "name": "دوچرخه/اسکیت/اسکوتر",
                  "icon": "",
                  "id": 46,
                  "slug": "bike-skate-scooter",
                  "second_slug": "دوچرخه-اسکیت-اسکوتر",
                  "children": [],
                  "parent": "entertainment",
                  "second_name": "دوچرخه، اسکیت، اسکوتر",
                  "url": {
                      "display": "سرگرمی-فراغت/دوچرخه-اسکیت-اسکوتر",
                      "order": 1
                  }
              },
              {
                  "name": "حیوانات",
                  "icon": "",
                  "id": 47,
                  "slug": "pets-animals",
                  "second_slug": "حیوانات",
                  "children": [
                      {
                          "name": "گربه",
                          "icon": "",
                          "id": 86,
                          "slug": "cats",
                          "second_slug": "گربه",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "گربه",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات/گربه",
                              "order": 1
                          }
                      },
                      {
                          "name": "موش و خرگوش",
                          "icon": "",
                          "id": 87,
                          "slug": "rodents",
                          "second_slug": "موش-خرگوش",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "موش و خرگوش",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات/موش-خرگوش",
                              "order": 1
                          }
                      },
                      {
                          "name": "خزنده",
                          "icon": "",
                          "id": 88,
                          "slug": "reptiles",
                          "second_slug": "خزنده",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "خزنده",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات/خزنده",
                              "order": 1
                          }
                      },
                      {
                          "name": "پرنده",
                          "icon": "",
                          "id": 89,
                          "slug": "birds",
                          "second_slug": "پرنده",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "پرنده",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات/پرنده",
                              "order": 1
                          }
                      },
                      {
                          "name": "ماهی",
                          "icon": "",
                          "id": 90,
                          "slug": "fishes",
                          "second_slug": "ماهی",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "ماهی",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات/ماهی",
                              "order": 1
                          }
                      },
                      {
                          "name": "لوازم جانبی",
                          "icon": "",
                          "id": 91,
                          "slug": "pet-supplies",
                          "second_slug": "لوازم-جانبی",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "لوازم جانبی مربوط به حیوانات",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات/لوازم-جانبی",
                              "order": 1
                          }
                      },
                      {
                          "name": "حیوانات مزرعه",
                          "icon": "",
                          "id": 92,
                          "slug": "farm-animals",
                          "second_slug": "حیوانات-مزرعه",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "حیوانات مزرعه",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات/حیوانات-مزرعه",
                              "order": 1
                          }
                      },
                      {
                          "name": "سگ",
                          "icon": "",
                          "id": 240,
                          "slug": "dogs",
                          "second_slug": "سگ",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "سگ",
                          "url": {
                              "display": "سگ",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های حیوانات",
                          "icon": "",
                          "id": 47,
                          "slug": "pets-animals",
                          "second_slug": "حیوانات",
                          "children": [],
                          "parent": "pets-animals",
                          "second_name": "حیوانات",
                          "url": {
                              "display": "سرگرمی-فراغت/حیوانات",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "entertainment",
                  "second_name": "حیوانات",
                  "url": {
                      "display": "سرگرمی-فراغت/حیوانات",
                      "order": 1
                  }
              },
              {
                  "name": "کلکسیون و سرگرمی",
                  "icon": "",
                  "id": 48,
                  "slug": "collecting",
                  "second_slug": "کلکسیون-سرگرمی",
                  "children": [
                      {
                          "name": "سکه، تمبر و اسکناس",
                          "icon": "",
                          "id": 100,
                          "slug": "stamp-coin-collecting",
                          "second_slug": "سکه-تمبر-اسکناس",
                          "children": [],
                          "parent": "collecting",
                          "second_name": "کلکسیون سکه، تمبر و اسکناس",
                          "url": {
                              "display": "سرگرمی-فراغت/کلکسیون-سرگرمی/سکه-تمبر-اسکناس",
                              "order": 1
                          }
                      },
                      {
                          "name": "اشیای عتیقه",
                          "icon": "",
                          "id": 104,
                          "slug": "antique-objects",
                          "second_slug": "اشیا-عتیقه",
                          "children": [],
                          "parent": "collecting",
                          "second_name": "کلکسیون اشیای عتیقه",
                          "url": {
                              "display": "سرگرمی-فراغت/کلکسیون-سرگرمی/اشیا-عتیقه",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های کلکسیون و سرگرمی",
                          "icon": "",
                          "id": 48,
                          "slug": "collecting",
                          "second_slug": "کلکسیون-سرگرمی",
                          "children": [],
                          "parent": "collecting",
                          "second_name": "کلکسیون و سرگرمی",
                          "url": {
                              "display": "سرگرمی-فراغت/کلکسیون-سرگرمی",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "entertainment",
                  "second_name": "کلکسیون و سرگرمی",
                  "url": {
                      "display": "سرگرمی-فراغت/کلکسیون-سرگرمی",
                      "order": 1
                  }
              },
              {
                  "name": "آلات موسیقی",
                  "icon": "",
                  "id": 50,
                  "slug": "musical-instruments",
                  "second_slug": "آلات-موسیقی",
                  "children": [
                      {
                          "name": "گیتار، بیس و امپلیفایر",
                          "icon": "",
                          "id": 95,
                          "slug": "guitars",
                          "second_slug": "گیتار-بیس-امپلیفایر",
                          "children": [],
                          "parent": "musical-instruments",
                          "second_name": "گیتار، بیس و امپلیفایر",
                          "url": {
                              "display": "سرگرمی-فراغت/آلات-موسیقی/گیتار-بیس-امپلیفایر",
                              "order": 1
                          }
                      },
                      {
                          "name": "سازهای بادی",
                          "icon": "",
                          "id": 116,
                          "slug": "wind-instrument",
                          "second_slug": "ساز-بادی",
                          "children": [],
                          "parent": "musical-instruments",
                          "second_name": "سازهای بادی",
                          "url": {
                              "display": "سرگرمی-فراغت/آلات-موسیقی/ساز-بادی",
                              "order": 1
                          }
                      },
                      {
                          "name": "پیانو/کیبورد/آکاردئون",
                          "icon": "",
                          "id": 96,
                          "slug": "organ-piano-accordion",
                          "second_slug": "پیانو-کیبورد-آکاردئون",
                          "children": [],
                          "parent": "musical-instruments",
                          "second_name": "پیانو/کیبورد/آکاردئون",
                          "url": {
                              "display": "سرگرمی-فراغت/آلات-موسیقی/پیانو-کیبورد-آکاردئون",
                              "order": 1
                          }
                      },
                      {
                          "name": "سنتی",
                          "icon": "",
                          "id": 98,
                          "slug": "iranian-instruments",
                          "second_slug": "سنتی",
                          "children": [],
                          "parent": "musical-instruments",
                          "second_name": "سازهای سنتی",
                          "url": {
                              "display": "سرگرمی-فراغت/آلات-موسیقی/سنتی",
                              "order": 1
                          }
                      },
                      {
                          "name": "درام و پرکاشن",
                          "icon": "",
                          "id": 99,
                          "slug": "percussion-instruments",
                          "second_slug": "درام-پرکاشن",
                          "children": [],
                          "parent": "musical-instruments",
                          "second_name": "درام و پرکاشن",
                          "url": {
                              "display": "سرگرمی-فراغت/آلات-موسیقی/درام-پرکاشن",
                              "order": 1
                          }
                      },
                      {
                          "name": "ویولن",
                          "icon": "",
                          "id": 164,
                          "slug": "violins",
                          "second_slug": "ویولن",
                          "children": [],
                          "parent": "musical-instruments",
                          "second_name": "ویولن",
                          "url": {
                              "display": "سرگرمی-فراغت/آلات-موسیقی/ویولن",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های آلات موسیقی",
                          "icon": "",
                          "id": 50,
                          "slug": "musical-instruments",
                          "second_slug": "آلات-موسیقی",
                          "children": [],
                          "parent": "musical-instruments",
                          "second_name": "آلات موسیقی",
                          "url": {
                              "display": "سرگرمی-فراغت/آلات-موسیقی",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "entertainment",
                  "second_name": "آلات موسیقی",
                  "url": {
                      "display": "سرگرمی-فراغت/آلات-موسیقی",
                      "order": 1
                  }
              },
              {
                  "name": "ورزش و تناسب اندام",
                  "icon": "",
                  "id": 51,
                  "slug": "sport-entertainment",
                  "second_slug": "ورزش-تناسب-اندام",
                  "children": [
                      {
                          "name": "ورزش‌های توپی",
                          "icon": "",
                          "id": 105,
                          "slug": "ball-sports",
                          "second_slug": "ورزش-توپی",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "ورزش‌های توپی",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام/ورزش-توپی",
                              "order": 1
                          }
                      },
                      {
                          "name": "کوهنوردی و کمپینگ",
                          "icon": "",
                          "id": 106,
                          "slug": "mountaineering-camping",
                          "second_slug": "کوهنوردی-کمپینگ",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "کوهنوردی و کمپینگ",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام/کوهنوردی-کمپینگ",
                              "order": 1
                          }
                      },
                      {
                          "name": "غواصی و ورزش‌های آبی",
                          "icon": "",
                          "id": 107,
                          "slug": "water-sports",
                          "second_slug": "غواصی-ورزش-آبی",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "غواصی و ورزش‌های آبی",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام/غواصی-ورزش-آبی",
                              "order": 1
                          }
                      },
                      {
                          "name": "ماهیگیری",
                          "icon": "",
                          "id": 190,
                          "slug": "fishing",
                          "second_slug": "ماهیگیری",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "ماهیگیری",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام/ماهیگیری",
                              "order": 1
                          }
                      },
                      {
                          "name": "تجهیزات ورزشی",
                          "icon": "",
                          "id": 109,
                          "slug": "sport-equipment",
                          "second_slug": "تجهیزات-ورزشی",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "تجهیزات ورزشی",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام/تجهیزات-ورزشی",
                              "order": 1
                          }
                      },
                      {
                          "name": "ورزش‌های زمستانی",
                          "icon": "",
                          "id": 110,
                          "slug": "winter-sports",
                          "second_slug": "ورزش-زمستانی",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "ورزش‌های زمستانی",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام/ورزش-زمستانی",
                              "order": 1
                          }
                      },
                      {
                          "name": "اسب و تجهیزات اسب سواری",
                          "icon": "",
                          "id": 111,
                          "slug": "horse-riding",
                          "second_slug": "اسب-تجهیزات-اسب-سواری",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "اسب و تجهیزات اسب سواری",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام/اسب-تجهیزات-اسب-سواری",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های ورزش و تناسب اندام",
                          "icon": "",
                          "id": 51,
                          "slug": "sport-entertainment",
                          "second_slug": "ورزش-تناسب-اندام",
                          "children": [],
                          "parent": "sport-entertainment",
                          "second_name": "ورزش و تناسب اندام",
                          "url": {
                              "display": "سرگرمی-فراغت/ورزش-تناسب-اندام",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "entertainment",
                  "second_name": "ورزش و تناسب اندام",
                  "url": {
                      "display": "سرگرمی-فراغت/ورزش-تناسب-اندام",
                      "order": 1
                  }
              },
              {
                  "name": "اسباب‌ بازی",
                  "icon": "",
                  "id": 165,
                  "slug": "game-and-toys",
                  "second_slug": "اسباب-بازی",
                  "children": [],
                  "parent": "entertainment",
                  "second_name": "اسباب‌ بازی",
                  "url": {
                      "display": "سرگرمی-فراغت/اسباب-بازی",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های سرگرمی و فراغت",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/entertainment_%s.png",
                  "id": 38,
                  "slug": "entertainment",
                  "second_slug": "سرگرمی-فراغت",
                  "children": [],
                  "parent": "entertainment",
                  "second_name": "سرگرمی و فراغت",
                  "url": {
                      "display": "سرگرمی-فراغت",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "سرگرمی و فراغت",
          "url": {
              "display": "سرگرمی-فراغت",
              "order": 1
          }
      },
      {
          "name": "اجتماعی",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/social_%s.png",
          "id": 151,
          "slug": "social-services",
          "second_slug": "اجتماعی",
          "children": [
              {
                  "name": "رویداد",
                  "icon": "",
                  "id": 152,
                  "slug": "event",
                  "second_slug": "رویداد",
                  "children": [
                      {
                          "name": "حراج",
                          "icon": "",
                          "id": 154,
                          "slug": "auction",
                          "second_slug": "حراج",
                          "children": [],
                          "parent": "event",
                          "second_name": "حراج",
                          "url": {
                              "display": "اجتماعی/رویداد/حراج",
                              "order": 1
                          }
                      },
                      {
                          "name": "گردهمایی و همایش",
                          "icon": "",
                          "id": 155,
                          "slug": "seminars-conference",
                          "second_slug": "گردهمایی-همایش",
                          "children": [],
                          "parent": "event",
                          "second_name": "گردهمایی و همایش",
                          "url": {
                              "display": "اجتماعی/رویداد/گردهمایی-همایش",
                              "order": 1
                          }
                      },
                      {
                          "name": "ورزشی",
                          "icon": "",
                          "id": 157,
                          "slug": "events-sports",
                          "second_slug": "رویداد-ورزشی",
                          "children": [],
                          "parent": "event",
                          "second_name": "رویداد ورزشی",
                          "url": {
                              "display": "اجتماعی/رویداد/رویداد-ورزشی",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های رویداد",
                          "icon": "",
                          "id": 152,
                          "slug": "event",
                          "second_slug": "رویداد",
                          "children": [],
                          "parent": "event",
                          "second_name": "رویداد",
                          "url": {
                              "display": "اجتماعی/رویداد",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "social-services",
                  "second_name": "رویداد",
                  "url": {
                      "display": "اجتماعی/رویداد",
                      "order": 1
                  }
              },
              {
                  "name": "داوطلبانه",
                  "icon": "",
                  "id": 153,
                  "slug": "voluntary",
                  "second_slug": "داوطلبانه",
                  "children": [
                      {
                          "name": "تحقیقاتی",
                          "icon": "",
                          "id": 159,
                          "slug": "education-research-partner",
                          "second_slug": "تحقیقاتی",
                          "children": [],
                          "parent": "voluntary",
                          "second_name": "فعالیت داوطلبانه تحقیقاتی",
                          "url": {
                              "display": "اجتماعی/داوطلبانه/تحقیقاتی",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های داوطلبانه",
                          "icon": "",
                          "id": 153,
                          "slug": "voluntary",
                          "second_slug": "داوطلبانه",
                          "children": [],
                          "parent": "voluntary",
                          "second_name": "فعالیت داوطلبانه",
                          "url": {
                              "display": "اجتماعی/داوطلبانه",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "social-services",
                  "second_name": "فعالیت داوطلبانه",
                  "url": {
                      "display": "اجتماعی/داوطلبانه",
                      "order": 1
                  }
              },
              {
                  "name": "گم‌شده‌ها",
                  "icon": "",
                  "id": 236,
                  "slug": "missing",
                  "second_slug": "گم‌شده‌ها",
                  "children": [
                      {
                          "name": "حیوانات",
                          "icon": "",
                          "id": 238,
                          "slug": "lost-animals",
                          "second_slug": "حیوانات",
                          "children": [],
                          "parent": "missing",
                          "second_name": "حیوانات",
                          "url": {
                              "display": "حیوانات",
                              "order": 1
                          }
                      },
                      {
                          "name": "اشیا",
                          "icon": "",
                          "id": 239,
                          "slug": "lost-objects",
                          "second_slug": "اشیا",
                          "children": [],
                          "parent": "missing",
                          "second_name": "اشیا",
                          "url": {
                              "display": "اشیا",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های گم‌شده‌ها",
                          "icon": "",
                          "id": 236,
                          "slug": "missing",
                          "second_slug": "گم‌شده‌ها",
                          "children": [],
                          "parent": "missing",
                          "second_name": "گم‌شده‌ها",
                          "url": {
                              "display": "گم‌شده‌ها",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "social-services",
                  "second_name": "گم‌شده‌ها",
                  "url": {
                      "display": "گم‌شده‌ها",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های اجتماعی",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/social_%s.png",
                  "id": 151,
                  "slug": "social-services",
                  "second_slug": "اجتماعی",
                  "children": [],
                  "parent": "social-services",
                  "second_name": "اجتماعی",
                  "url": {
                      "display": "اجتماعی",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "اجتماعی",
          "url": {
              "display": "اجتماعی",
              "order": 1
          }
      },
      {
          "name": "برای کسب و کار",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/business_%s.png",
          "id": 79,
          "slug": "businesses",
          "second_slug": "کسب-کار",
          "children": [
              {
                  "name": "تجهیزات و ماشین‌آلات",
                  "icon": "",
                  "id": 124,
                  "slug": "business-equipment",
                  "second_slug": "تجهیزات-ماشین-آلات",
                  "children": [
                      {
                          "name": "فروشگاه و مغازه",
                          "icon": "",
                          "id": 126,
                          "slug": "store-equipment",
                          "second_slug": "فروشگاه-مغازه",
                          "children": [],
                          "parent": "business-equipment",
                          "second_name": "تجهیزات و ماشین‌آلات فروشگاه و مغازه ",
                          "url": {
                              "display": "کسب-کار/تجهیزات-ماشین-آلات/فروشگاه-مغازه",
                              "order": 1
                          }
                      },
                      {
                          "name": "آرایشگاه و سالن‌های زیبایی",
                          "icon": "",
                          "id": 127,
                          "slug": "barber-shop-equipment",
                          "second_slug": "آرایشگاه-سالن-زیبایی",
                          "children": [],
                          "parent": "business-equipment",
                          "second_name": "تجهیزات و ماشین‌آلات آرایشگاه و سالن‌های زیبایی",
                          "url": {
                              "display": "کسب-کار/تجهیزات-ماشین-آلات/آرایشگاه-سالن-زیبایی",
                              "order": 1
                          }
                      },
                      {
                          "name": "دفتر کار",
                          "icon": "",
                          "id": 128,
                          "slug": "office-equipment",
                          "second_slug": "دفتر-کار",
                          "children": [],
                          "parent": "business-equipment",
                          "second_name": "تجهیزات دفتر کار",
                          "url": {
                              "display": "کسب-کار/تجهیزات-ماشین-آلات/دفتر-کار",
                              "order": 1
                          }
                      },
                      {
                          "name": "صنعتی",
                          "icon": "",
                          "id": 129,
                          "slug": "industrial-equipment",
                          "second_slug": "صنعتی",
                          "children": [],
                          "parent": "business-equipment",
                          "second_name": "تجهیزات و ماشین‌آلات صنعتی",
                          "url": {
                              "display": "کسب-کار/تجهیزات-ماشین-آلات/صنعتی",
                              "order": 1
                          }
                      },
                      {
                          "name": "کافی‌شاپ و رستوران",
                          "icon": "",
                          "id": 130,
                          "slug": "restaurant-equipment",
                          "second_slug": "کافی-شاپ-رستوران",
                          "children": [],
                          "parent": "business-equipment",
                          "second_name": "تجهیزات و ماشین‌آلات کافی‌شاپ و رستوران",
                          "url": {
                              "display": "کسب-کار/تجهیزات-ماشین-آلات/کافی-شاپ-رستوران",
                              "order": 1
                          }
                      },
                      {
                          "name": "پزشکی",
                          "icon": "",
                          "id": 242,
                          "slug": "medical-equipment",
                          "second_slug": "پزشکی",
                          "children": [],
                          "parent": "business-equipment",
                          "second_name": "پزشکی",
                          "url": {
                              "display": "پزشکی",
                              "order": 1
                          }
                      },
                      {
                          "name": "همه‌ی آگهی‌های تجهیزات و ماشین‌آلات",
                          "icon": "",
                          "id": 124,
                          "slug": "business-equipment",
                          "second_slug": "تجهیزات-ماشین-آلات",
                          "children": [],
                          "parent": "business-equipment",
                          "second_name": "تجهیزات و ماشین‌آلات",
                          "url": {
                              "display": "کسب-کار/تجهیزات-ماشین-آلات",
                              "order": 1
                          }
                      }
                  ],
                  "parent": "businesses",
                  "second_name": "تجهیزات و ماشین‌آلات",
                  "url": {
                      "display": "کسب-کار/تجهیزات-ماشین-آلات",
                      "order": 1
                  }
              },
              {
                  "name": "عمده فروشی",
                  "icon": "",
                  "id": 131,
                  "slug": "wholesale",
                  "second_slug": "عمده-فروشی",
                  "children": [],
                  "parent": "businesses",
                  "second_name": "عمده فروشی",
                  "url": {
                      "display": "کسب-کار/عمده-فروشی",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های برای کسب و کار",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/business_%s.png",
                  "id": 79,
                  "slug": "businesses",
                  "second_slug": "کسب-کار",
                  "children": [],
                  "parent": "businesses",
                  "second_name": "مربوط به کسب و کار",
                  "url": {
                      "display": "کسب-کار",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "مربوط به کسب و کار",
          "url": {
              "display": "کسب-کار",
              "order": 1
          }
      },
      {
          "name": "استخدام و کاریابی",
          "icon": "https://s100.divarcdn.com/static/explorers/categories/recruitment_%s.png",
          "id": 191,
          "slug": "jobs",
          "second_slug": "استخدام-کاریابی",
          "children": [
              {
                  "name": "اداری و مدیریت",
                  "icon": "",
                  "id": 192,
                  "slug": "administrative-jobs",
                  "second_slug": "استخدام-اداری-مدیریت,اداری-مدیریت",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام اداری و مدیریت",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-اداری-مدیریت",
                      "order": 1
                  }
              },
              {
                  "name": "سرایداری و نظافت",
                  "icon": "",
                  "id": 232,
                  "slug": "janitorial-jobs",
                  "second_slug": "استخدام-سرایداری-نظافت,سرایداری-نظافت",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام سرایداری و نظافت",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-سرایداری-نظافت",
                      "order": 1
                  }
              },
              {
                  "name": "معماری ،عمران و ساختمانی",
                  "icon": "",
                  "id": 193,
                  "slug": "architect-jobs",
                  "second_slug": "استخدام-مهندس-معماری-عمران-ساختمانی,معماری-عمران-ساختمانی",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام معماری ،عمران و ساختمانی",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-مهندس-معماری-عمران-ساختمانی",
                      "order": 1
                  }
              },
              {
                  "name": "خدمات فروشگاه و رستوران",
                  "icon": "",
                  "id": 202,
                  "slug": "service-jobs",
                  "second_slug": "استخدام-خدمات-فروشگاه-رستوران",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام خدمات فروشگاه و رستوران",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-خدمات-فروشگاه-رستوران",
                      "order": 1
                  }
              },
              {
                  "name": "رایانه و فناوری اطلاعات",
                  "icon": "",
                  "id": 194,
                  "slug": "it-computer-jobs",
                  "second_slug": "استخدام-مهندس-کامپیوتر-فناوری-اطلاعات-آی-تی,رایانه-فناوری-اطلاعات",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام رایانه و فناوری اطلاعات",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-مهندس-کامپیوتر-فناوری-اطلاعات-آی-تی",
                      "order": 1
                  }
              },
              {
                  "name": "مالی و حسابداری و حقوقی",
                  "icon": "",
                  "id": 195,
                  "slug": "finance-legal-jobs",
                  "second_slug": "استخدام-مالی-حسابداری-حقوقی,مالی-حسابداری-حقوقی",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام مالی و حسابداری و حقوقی",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-مالی-حسابداری-حقوقی",
                      "order": 1
                  }
              },
              {
                  "name": "بازاریابی و فروش",
                  "icon": "",
                  "id": 196,
                  "slug": "marketing-jobs",
                  "second_slug": "استخدام-بازاریابی-فروش-ویزیتور,بازاریابی-فروش",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام بازاریابی و فروش",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-بازاریابی-فروش-ویزیتور",
                      "order": 1
                  }
              },
              {
                  "name": "صنعتی و فنی و مهندسی",
                  "icon": "",
                  "id": 197,
                  "slug": "technical-jobs",
                  "second_slug": "استخدام-صنعتی-فنی-مهندسی,صنعتی-فنی-مهندسی",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام صنعتی ، فنی و مهندسی",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-صنعتی-فنی-مهندسی",
                      "order": 1
                  }
              },
              {
                  "name": "آموزشی",
                  "icon": "",
                  "id": 198,
                  "slug": "teaching-jobs",
                  "second_slug": "استخدام-مدرس-مربی-آموزشی,آموزشی",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام آموزشی",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-مدرس-مربی-آموزشی",
                      "order": 1
                  }
              },
              {
                  "name": "حمل و نقل",
                  "icon": "",
                  "id": 199,
                  "slug": "transport-delivery-jobs",
                  "second_slug": "استخدام-حمل-نقل-راننده-پیک,حمل-نقل",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام حمل و نقل",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-حمل-نقل-راننده-پیک",
                      "order": 1
                  }
              },
              {
                  "name": "درمانی و زیبایی و بهداشتی",
                  "icon": "",
                  "id": 200,
                  "slug": "health-beauty-jobs",
                  "second_slug": "استخدام-درمانی-زیبایی-بهداشتی,درمانی-زیبایی-بهداشتی",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام درمانی، زیبایی و بهداشتی",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-درمانی-زیبایی-بهداشتی",
                      "order": 1
                  }
              },
              {
                  "name": "هنری و رسانه",
                  "icon": "",
                  "id": 201,
                  "slug": "art-media-jobs",
                  "second_slug": "استخدام-هنری-رسانه,هنری-رسانه",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام هنری و رسانه",
                  "url": {
                      "display": "استخدام-کاریابی/استخدام-هنری-رسانه",
                      "order": 1
                  }
              },
              {
                  "name": "همه‌ی آگهی‌های استخدام و کاریابی",
                  "icon": "https://s100.divarcdn.com/static/explorers/categories/recruitment_%s.png",
                  "id": 191,
                  "slug": "jobs",
                  "second_slug": "استخدام-کاریابی",
                  "children": [],
                  "parent": "jobs",
                  "second_name": "استخدام و کاریابی",
                  "url": {
                      "display": "استخدام-کاریابی",
                      "order": 1
                  }
              }
          ],
          "parent": "ROOT",
          "second_name": "استخدام و کاریابی",
          "url": {
              "display": "استخدام-کاریابی",
              "order": 1
          }
      }
  ],
  "parent": "",
  "second_name": "همهٔ آگهی‌ها",
  "url": {
      "display": "",
      "order": 1
  }
}

const allCities = {
  "shouldSelectCity": false,
  "cities": [],
  "topCities": [
      "tehran",
      "mashhad",
      "karaj",
      "shiraz",
      "isfahan",
      "ahvaz",
      "tabriz",
      "kermanshah",
      "qom",
      "rasht"
  ],
  "places": {},
  "compressedData": [
      [
          24,
          "آبادان",
          "abadan"
      ],
      [
          851,
          "آباده",
          "abadeh"
      ],
      [
          775,
          "آبدانان",
          "abdanan"
      ],
      [
          1709,
          "آبسرد",
          "absard"
      ],
      [
          1715,
          "آبعلی",
          "abali"
      ],
      [
          869,
          "آبیک",
          "abyek"
      ],
      [
          853,
          "آذرشهر",
          "azarshahr"
      ],
      [
          1737,
          "آران و بیدگل",
          "aran-va-bidgol"
      ],
      [
          1691,
          "آزادشهر",
          "azadshahr-golestan"
      ],
      [
          1722,
          "آسارا",
          "asara"
      ],
      [
          824,
          "آستارا",
          "astara"
      ],
      [
          825,
          "آستانه اشرفیه",
          "astaneh-ashrafiyeh"
      ],
      [
          793,
          "آشخانه",
          "ashkhaneh"
      ],
      [
          748,
          "آق قلا",
          "aq-qala"
      ],
      [
          663,
          "آمل",
          "amol"
      ],
      [
          1723,
          "ابریشم",
          "abrisham-isfahan"
      ],
      [
          802,
          "ابهر",
          "abhar"
      ],
      [
          15,
          "اراک",
          "arak"
      ],
      [
          1714,
          "ارجمند",
          "arjmand"
      ],
      [
          17,
          "اردبیل",
          "ardabil"
      ],
      [
          846,
          "اردکان",
          "ardakan"
      ],
      [
          10,
          "ارومیه",
          "urmia"
      ],
      [
          870,
          "ازنا",
          "azna"
      ],
      [
          842,
          "اسدآباد",
          "asadabad"
      ],
      [
          794,
          "اسفراین",
          "esfarāyen"
      ],
      [
          819,
          "اسلام‌‌آباد غرب",
          "eslamabad-gharb"
      ],
      [
          29,
          "اسلام‌شهر",
          "eslamshahr"
      ],
      [
          1721,
          "اشتهارد",
          "eshtehard"
      ],
      [
          859,
          "اشنویه",
          "oshnavieh"
      ],
      [
          4,
          "اصفهان",
          "isfahan",
          {
              "376": "bid-abad",
              "377": "abbas-abad-isfahan",
              "378": "lonban",
              "379": "shahin-shahr",
              "380": "bozorgmehr",
              "381": "khane-esfahan",
              "382": "baharestan-isfahan",
              "383": "malek-shahr",
              "384": "fooladshahr",
              "385": "sepahan-shahr",
              "386": "sichan",
              "387": "khomeyni-shahr",
              "391": "chaharbagh-khajoo",
              "392": "3nd-moshtagh",
              "394": "jolfa",
              "398": "mardavij",
              "402": "tiran",
              "403": "hasht-behesht",
              "409": "zeynabiye",
              "411": "shahreza",
              "413": "mobarakeh",
              "645": "hosein-abad",
              "646": "zarinshahr",
              "875": "gaz",
              "1419": "shahrak-shahid-montazeri",
              "1420": "mahmud-abad",
              "1421": "amin-abad",
              "1422": "isfahan-university-of-technology",
              "1423": "dehno",
              "1424": "ashegh-abad",
              "1425": "shahrak-kowsar",
              "1426": "shahrak-mahdieh",
              "1427": "resalat",
              "1428": "babukan",
              "1429": "dastgerd-e-qadaadeh",
              "1430": "marchin",
              "1433": "lemjir",
              "1434": "naser-khosro",
              "1435": "azadegan",
              "1436": "aqiq",
              "1437": "sadaf",
              "1438": "berelian",
              "1440": "negarestan",
              "1441": "valiasr-town",
              "1442": "shahrak-milad",
              "1443": "shahrak-kaveh",
              "1444": "barazandeh",
              "1445": "derak",
              "1446": "eshragh",
              "1447": "lale",
              "1448": "24-metri",
              "1449": "toghchi",
              "1450": "farvardin",
              "1451": "baghoush-khaneh",
              "1452": "pa-ghalea",
              "1453": "modarres",
              "1454": "shahshahan",
              "1455": "joubareh",
              "1456": "shahishabad",
              "1457": "dastgerdeh",
              "1458": "afaran",
              "1459": "mahale-now",
              "1460": "gurtan",
              "1461": "nazband",
              "1462": "bazzar",
              "1463": "janiran",
              "1464": "veldan",
              "1465": "soodan",
              "1467": "mohammad-taher",
              "1468": "golbahar",
              "1469": "yazd-abad",
              "1470": "ahmad-abad",
              "1471": "ladan",
              "1472": "golzar",
              "1473": "ghale-tabre",
              "1474": "sheykh-yousef",
              "1475": "mofatteh",
              "1476": "dashtestan",
              "1477": "talar",
              "1478": "paeen-darvazeh",
              "1479": "shahzyed",
              "1480": "bisim",
              "1481": "hamedaniyan",
              "1482": "baharan",
              "1483": "roknodowleh",
              "1484": "farhangian",
              "1485": "nourbaran",
              "1487": "charkhab",
              "1488": "fath-abad",
              "1490": "elyderan",
              "1491": "bishe-habib",
              "1492": "jowzdan",
              "1493": "nazhvan",
              "1494": "mehr-abad",
              "1495": "bazougah",
              "1496": "shahrestan",
              "1497": "jey-Shir",
              "1498": "marnan",
              "1500": "takht-foulad",
              "1501": "kouleh-parcheh",
              "1502": "gabr-abad",
              "1503": "ferdos",
              "1504": "kerdabad",
              "1505": "kalman",
              "1506": "bagh-ghadir",
              "1507": "farhangiyan-town",
              "1508": "soltan-abad",
              "1509": "pozveh",
              "1510": "khiadan",
              "1511": "shahrak-elahiyeh",
              "1512": "kalmh-khvaran",
              "1513": "zavan",
              "1514": "pinart",
              "1515": "shahrak-zayandeh",
              "1516": "fizadan",
              "1517": "radan",
              "1518": "kuy-shahid-keshvari",
              "1519": "roshan-dasht",
              "1521": "azar",
              "1522": "naqshe-jahan",
              "1523": "rehnan",
              "1524": "doteflan",
              "1527": "soffeh",
              "1528": "shahrak-valiasr",
              "1529": "amiriyeh",
              "1530": "bagh-ziar",
              "1531": "vahid",
              "1532": "bagh-daryacheh",
              "1533": "farhang",
              "1534": "mahmoodiyeh",
              "1535": "sheykh-sadough",
              "1536": "khalaja",
              "1537": "sajjadieh",
              "1538": "keshavarzi",
              "1539": "bagh-ferdows",
              "1540": "dastgerd",
              "1541": "ghaemiyeh",
              "1542": "saadat-abad",
              "1543": "azadan",
              "1544": "golestan",
              "1545": "nasr-abad",
              "1546": "monarjonban",
              "1547": "dorcheh",
              "1548": "zahran",
              "1549": "javan-e-paein",
              "1550": "javan-e-bala",
              "1551": "jarvakan",
              "1552": "darb-e-sibeh",
              "1553": "mahaleh-sofla",
              "1554": "arghavanieh",
              "1555": "sanjavamareh",
              "1556": "ghale-bertianchi",
              "1557": "histan",
              "1558": "shahid-rajaee",
              "1559": "buzan",
              "1560": "abr",
              "1561": "kangaz",
              "1562": "sattar",
              "1563": "ardaji",
              "1564": "khatoonabad",
              "1565": "sudan-zeinabiyeh",
              "1566": "mohammad-abad",
              "1567": "oman-samani",
              "1568": "ghale-nou",
              "1569": "raran",
              "1570": "andevan",
              "1571": "kian",
              "1572": "gavart",
              "1573": "haftoon",
              "1574": "asgariyeh",
              "1575": "batoun",
              "1576": "tameh",
              "1577": "jaber-ansari",
              "1578": "golmohammadi",
              "1579": "kuy-golzar",
              "1580": "bahram-abad",
              "1581": "shafagh",
              "1582": "razmandegan",
              "1583": "miremad",
              "1584": "shahriyar",
              "1585": "kesare",
              "1586": "fardovan",
              "1587": "kojan",
              "1588": "partman",
              "1589": "bagh-zereshk",
              "1590": "aineh-khaneh",
              "1591": "bagh-negar",
              "1592": "hemat-abad",
              "1593": "abshar",
              "1594": "kuy-emam",
              "1595": "emam-jafar-sadegh-town",
              "1596": "sepahan-lane",
              "1597": "denart",
              "1598": "malek",
              "1599": "khoram",
              "1600": "bahar-azadi",
              "1601": "jelvan",
              "1602": "hesseh",
              "1604": "shahrak-imam-hossein",
              "1605": "rahim-abad",
              "1606": "bagh-fadak",
              "1609": "dolat-abad"
          }
      ],
      [
          1728,
          "اقلید",
          "eqlid"
      ],
      [
          872,
          "الوند",
          "alvand"
      ],
      [
          830,
          "الیگودرز",
          "aligudarz"
      ],
      [
          1688,
          "املش",
          "amlash"
      ],
      [
          1703,
          "امیرکلا",
          "amirkala"
      ],
      [
          796,
          "اندیمشک",
          "andimeshk"
      ],
      [
          759,
          "اهر",
          "ahar"
      ],
      [
          7,
          "اهواز",
          "ahvaz",
          {
              "322": "kianpars",
              "323": "golestan",
              "324": "zeitoun-karmandi",
              "325": "padadshahr",
              "326": "koorosh",
              "327": "zeitoun-kargari",
              "328": "naderi",
              "329": "parddis",
              "330": "bahonar",
              "331": "lashkar-ahvaz",
              "332": "kuy-enghelab",
              "333": "kian-abad",
              "334": "baharestan-ahvaz",
              "335": "sepidar",
              "336": "naft",
              "337": "shahrak-daneshgaah",
              "338": "amanieh",
              "339": "shahrak-naftt",
              "340": "kian-shahr",
              "341": "meli-rah",
              "342": "farhang-shahr-ahvaz",
              "343": "kuy-mahdis",
              "344": "kuy-nabovvat",
              "345": "kuy-ramezan",
              "347": "taleghani",
              "348": "yousefi",
              "349": "resaalat",
              "350": "moeinzadeh",
              "351": "sad-dastgaah",
              "352": "ziba-shaahr",
              "353": "kuy-soltan-manesh",
              "354": "fooladshahr-ahvaz",
              "355": "ariya-shahr",
              "356": "pirozi",
              "357": "new-side",
              "358": "zergan",
              "361": "daghagheleh",
              "362": "sisad-dastgah",
              "363": "lashkar-abad",
              "364": "hasir-abad",
              "365": "south-shariati",
              "366": "kuy-alavi",
              "367": "kut-abdollah",
              "368": "cantex",
              "369": "shahrak-aghajari",
              "370": "shahrak-hafari",
              "371": "padad-phase2",
              "372": "padshahr-phase1",
              "373": "kuy-modarres",
              "644": "kuy-farhangian"
          }
      ],
      [
          797,
          "ایذه",
          "izeh"
      ],
      [
          807,
          "ایرانشهر",
          "iranshahr"
      ],
      [
          1701,
          "ایزدشهر",
          "izadshahr"
      ],
      [
          32,
          "ایلام",
          "ilam"
      ],
      [
          776,
          "ایوان",
          "eyvan"
      ],
      [
          664,
          "بابل",
          "babol"
      ],
      [
          710,
          "بابلسر",
          "babolsar"
      ],
      [
          1707,
          "باقرشهر",
          "baghershahr"
      ],
      [
          662,
          "بانه",
          "baneh"
      ],
      [
          39,
          "بجنورد",
          "bojnurd"
      ],
      [
          778,
          "برازجان",
          "borazjan"
      ],
      [
          1735,
          "بردسکن",
          "bardaskan"
      ],
      [
          26,
          "بروجرد",
          "borujerd"
      ],
      [
          785,
          "بروجن",
          "boroujen"
      ],
      [
          815,
          "بم",
          "bam"
      ],
      [
          760,
          "بناب",
          "bonab"
      ],
      [
          798,
          "بندر امام خمینی",
          "bandar-imam-khomeini"
      ],
      [
          708,
          "بندر انزلی",
          "bandar-anzali"
      ],
      [
          751,
          "بندر ترکمن",
          "bandar-torkaman"
      ],
      [
          18,
          "بندرعباس",
          "bandar-abbas"
      ],
      [
          779,
          "بندر کنگان",
          "bandar-kangan"
      ],
      [
          780,
          "بندر گناوه",
          "bandar-ganaveh"
      ],
      [
          37,
          "بندر ماهشهر",
          "bandar-mahshahr"
      ],
      [
          25,
          "بوشهر",
          "bushehr"
      ],
      [
          765,
          "بوکان",
          "bukan"
      ],
      [
          314,
          "بهبهان",
          "behbahan"
      ],
      [
          832,
          "بهشهر",
          "behshahr"
      ],
      [
          868,
          "بیجار",
          "bijar"
      ],
      [
          34,
          "بیرجند",
          "birjand"
      ],
      [
          771,
          "پارس‌آباد",
          "parsabad"
      ],
      [
          1702,
          "پل سفید",
          "polsefid"
      ],
      [
          766,
          "پیرانشهر",
          "piranshahr"
      ],
      [
          781,
          "پیشوا",
          "pishva"
      ],
      [
          811,
          "تاکستان",
          "takestan"
      ],
      [
          829,
          "تالش",
          "talesh"
      ],
      [
          1729,
          "تایباد",
          "taybad"
      ],
      [
          5,
          "تبریز",
          "tabriz"
      ],
      [
          791,
          "تربت جام",
          "torbat-jam"
      ],
      [
          833,
          "تنکابن",
          "tonekabon"
      ],
      [
          1739,
          "تنکمان",
          "tankaman"
      ],
      [
          866,
          "تویسرکان",
          "tuyserkan"
      ],
      [
          1,
          "تهران",
          "tehran",
          {
              "40": "ajudaniye",
              "42": "niavaran",
              "43": "kashanak",
              "44": "jamaran",
              "45": "emamzadeh-ghasem",
              "46": "golab-darreh",
              "47": "dar-abad",
              "48": "aqdasiyeh",
              "49": "shahrak-naft",
              "50": "shahrak-golha",
              "51": "shahrak-mahallati",
              "52": "sohanak",
              "53": "ozgol",
              "54": "darband",
              "55": "velenjak",
              "56": "zafaraniyeh",
              "57": "evin",
              "58": "darakeh",
              "59": "farahzad",
              "60": "mahmoodiyeh",
              "61": "tajrish",
              "62": "kamraniyeh",
              "63": "chizar",
              "64": "farmanieh",
              "65": "qeytarieh",
              "66": "dezashib",
              "67": "pasdaran",
              "68": "ekhtiarieh",
              "70": "qolhak",
              "71": "darrous",
              "72": "zafar",
              "74": "mirdamad",
              "75": "saadat-abad",
              "78": "shahrak-gharb",
              "81": "vanak-village",
              "82": "punak",
              "84": "zargandeh",
              "85": "elahiyeh",
              "86": "jordan",
              "87": "ararat",
              "88": "gisha",
              "90": "yousef-abad",
              "91": "amir-abad",
              "92": "baharestan",
              "93": "bazaar",
              "94": "jomhouri",
              "95": "seyyed-khandan",
              "96": "gandhi",
              "99": "hasan-abad",
              "103": "shian",
              "104": "lavizan",
              "105": "ghanat-kowsar",
              "106": "shemiran-now",
              "108": "west-tehran-pars",
              "109": "east-tehran-pars",
              "110": "majid-abad",
              "112": "estakhr",
              "113": "shahrak-omid",
              "115": "oghaf",
              "116": "university-of-science-and-technology",
              "117": "madaen",
              "118": "dardasht",
              "119": "hafthoz",
              "120": "fadak",
              "121": "hakimiyeh",
              "122": "zeynabiyeh",
              "123": "tehran-now",
              "125": "shams-abad",
              "126": "majidiyeh",
              "127": "dabestan",
              "128": "kazem-abad",
              "130": "heshmatiyeh",
              "131": "aramaneh",
              "132": "nezam-abad",
              "133": "vahidiyeh",
              "134": "niroo-havayi",
              "138": "shahrak-jandarmeri",
              "139": "marzdaran",
              "140": "shahrak-koohsar",
              "141": "morad-abad",
              "143": "almahdi",
              "145": "north-jannat-abad",
              "146": "central-jannat-abad",
              "147": "shahin",
              "148": "south-jannat-abad",
              "151": "north-shahran",
              "152": "south-shahran",
              "153": "kan",
              "154": "baharan",
              "155": "shahr-ziba",
              "156": "andisheh",
              "157": "sazman-aab",
              "158": "sazman-barnameh",
              "159": "shahrak-parvaz",
              "160": "eram",
              "161": "dehkadeh-olympic",
              "162": "zibadasht",
              "163": "shahrak-sadra",
              "164": "azadi",
              "165": "shahrak-rahahan",
              "166": "shahrak-ansar",
              "167": "ekbatan",
              "168": "kuy-bimeh",
              "169": "shahrak-apadana",
              "170": "kuy-ferdows",
              "171": "tarasht",
              "172": "sadeghiyeh",
              "173": "abazar",
              "174": "kuy-mehran",
              "175": "shahrak-esteqlal",
              "178": "tehransar",
              "179": "shahrak-darya",
              "180": "shahrak-aseman",
              "182": "mehrabad-international-airport",
              "184": "kuy-17-shahrivar",
              "185": "shahrak-ferdos",
              "186": "south-mehr-abad",
              "187": "shahrak-taleqani",
              "188": "khalij-fars",
              "189": "shad-abad",
              "190": "shahrak-arghavan-emam-khomeyni",
              "191": "ebrahimabad",
              "192": "yaftabad",
              "193": "shahrak-moslemin",
              "194": "shahrak-vali-asr",
              "195": "ostad-moein",
              "196": "jey",
              "197": "beryanak",
              "198": "azari",
              "199": "falah",
              "200": "daryan-no",
              "201": "tehran-villa",
              "202": "shahrara",
              "203": "towhid",
              "204": "jamalzadeh",
              "205": "sattarkhan",
              "206": "patrice-lumumba",
              "208": "keshavarz-boulevard",
              "209": "university-of-tehran",
              "210": "fatemi",
              "211": "qezel-qaleh",
              "212": "shahrak-shahid-mofatteh",
              "214": "mobarak-abad-beheshti",
              "216": "hasan-abad-baqerfar",
              "217": "bagh-rezvan",
              "219": "karim-abad",
              "220": "abdol-abad",
              "221": "hashem-abad-rey",
              "224": "alain-rey",
              "227": "zahir-abad",
              "228": "deylaman",
              "231": "javanmard-qasab",
              "232": "mansuriyeh",
              "233": "dolat-abad",
              "234": "malekabad",
              "235": "ali-abad",
              "236": "shahrak-takhti",
              "240": "shoosh",
              "241": "shahrak-kyanshahr",
              "243": "moshiriyeh",
              "245": "karevan",
              "246": "masoodieh",
              "248": "qasr-firuzeh-do",
              "249": "afsariyeh",
              "250": "yakhchi-abad",
              "251": "chaharsad-dastgah",
              "252": "nazi-abad",
              "253": "khazaneh",
              "254": "bahmanyar",
              "255": "khani-abad",
              "256": "esfandiyari",
              "257": "shahrak-shariati",
              "259": "shahrak-aboozar",
              "260": "shahrak-sharifi",
              "262": "nemat-abad",
              "263": "shahid-rajaie",
              "264": "bagh-azari",
              "265": "javadiyeh",
              "266": "rumi",
              "268": "zehtabi",
              "269": "vasfenard",
              "270": "hashem-abad",
              "271": "shahrak-amiralmomenin",
              "272": "doolab",
              "273": "ahang",
              "275": "gomrok",
              "276": "amir-bahador",
              "277": "amiriyeh",
              "278": "moniriyeh",
              "279": "sangelaj",
              "280": "pamenar",
              "281": "sheykh-hadi",
              "282": "meydan-horr",
              "283": "eskandari",
              "284": "salsabil",
              "285": "darvazeh-shemiran",
              "286": "khajeh-nasir-tousi",
              "287": "imam-hossein",
              "288": "safa",
              "289": "sad-dastgah",
              "290": "tehran-delgosha",
              "291": "aemmeh-ye-athaar",
              "292": "piroozi",
              "293": "qasr-firuzeh-yek",
              "297": "behjat-abad",
              "298": "iran-shahr",
              "299": "sanaey",
              "300": "abbas-abad",
              "301": "arjantin",
              "302": "sohrevardi",
              "306": "chitgar",
              "307": "shahrak-ghazali",
              "308": "shahrak-ghazali-cinema",
              "311": "sarvazad",
              "312": "navvab",
              "313": "qods",
              "315": "vanak",
              "360": "amaniyeh",
              "374": "vardavard",
              "399": "narmak",
              "418": "rudehen",
              "419": "bumehen",
              "420": "pardis",
              "421": "lavasan",
              "422": "fasham",
              "424": "qarchak",
              "425": "varamin",
              "426": "robat-karim",
              "427": "parand",
              "637": "sharifabad",
              "638": "pakdasht",
              "639": "qiamdasht",
              "653": "shahriar",
              "654": "azerbaijan",
              "655": "meydan-enghelab",
              "656": "shademan",
              "657": "jeyhoon",
              "658": "meydan-valiasr",
              "673": "firuzkuh",
              "907": "abshar-tehran",
              "908": "havanirooz",
              "909": "kouhak",
              "910": "shahrak-pasdaran",
              "911": "shahrak-farhangian",
              "912": "fath",
              "913": "saeed-abad",
              "914": "sar-asiyab-mehr-abad",
              "915": "shamshiri",
              "916": "tolid-daroo",
              "917": "behdasht",
              "918": "dolatkhah",
              "919": "tehran-hesarak",
              "920": "bagh-feyz",
              "921": "shahrak-naft-district5",
              "922": "parvaz",
              "923": "kuy-faraz",
              "924": "hezarsang",
              "925": "aseman",
              "926": "sepehr",
              "927": "eivanak",
              "928": "university-of-sharif",
              "929": "darya",
              "930": "bagh-ferdows",
              "931": "hekmat",
              "932": "shahrak-valfajr",
              "933": "jahad",
              "934": "tavanir",
              "935": "nosrat",
              "936": "nejatollahi",
              "937": "tehran-khaghani",
              "938": "bahar",
              "939": "niloufar",
              "940": "darb-dowom",
              "941": "qoba",
              "942": "hesar-booali",
              "943": "araj",
              "944": "kuy-nobonyad",
              "945": "tehran-kerman",
              "946": "sorkhe-hesar",
              "947": "javadiyeh-tehran-pars",
              "948": "khak-sefid",
              "949": "tehran-lashkar",
              "950": "sabalan",
              "951": "ashtiyani",
              "952": "hafezie",
              "953": "tehran-emamat",
              "954": "south-narmak",
              "955": "zarkesh",
              "956": "taslihat",
              "957": "east-shareq",
              "958": "khaje-nezam-molk",
              "959": "tehran-police",
              "960": "tehran-gorgan",
              "961": "qasemabad",
              "962": "dehqan",
              "963": "shahid-asadi",
              "964": "zahed-gilani",
              "965": "parastar",
              "966": "taxirani",
              "967": "nabi-akram",
              "968": "shiva",
              "969": "shokoofeh",
              "970": "sarasiab-doolab",
              "971": "jaberi",
              "972": "shahed",
              "973": "saheb-al-zaman",
              "974": "aref",
              "975": "mina",
              "976": "mesgar-abad",
              "977": "shahadat",
              "978": "safaiye",
              "979": "ebn-babevayh",
              "980": "taqiabad-rey",
              "981": "abbas-abad-rey",
              "982": "shahid-avini",
              "983": "sizdah-aban",
              "984": "sartakht",
              "985": "hamzeh-abad",
              "986": "estakhr-rey",
              "987": "aqdasiyeh-rey",
              "988": "firoozabadi",
              "989": "khani-abad-no",
              "990": "etehad",
              "991": "tehran-iran",
              "992": "abshar",
              "993": "aminhozour",
              "994": "ferdowsi",
              "995": "qiam",
              "996": "sirous",
              "997": "kosar",
              "998": "qalamestan",
              "999": "salamat",
              "1000": "makhsous",
              "1001": "tehran-zanjan",
              "1002": "hashemi",
              "1003": "shahid-dastgheyb",
              "1004": "shabiri",
              "1005": "soleymani",
              "1006": "haftchenar",
              "1007": "bolursazi",
              "1008": "tehran-shandiz",
              "1009": "zamzam",
              "1010": "moqadam",
              "1011": "tous",
              "1012": "golchin",
              "1013": "jalili",
              "1014": "imam-sajjad",
              "1015": "bisim",
              "1016": "tayeb",
              "1017": "khavaran",
              "1018": "minabi",
              "1019": "atabak",
              "1020": "abuzar",
              "1021": "imamzadeh-hasan",
              "1022": "bagh-khazaneh",
              "1023": "shahid-borujerdi",
              "1024": "heravi",
              "1025": "tehran-hosein-abad",
              "1026": "east-saleh-abad",
              "1027": "abdollah-abad",
              "1028": "tehran-jolfa",
              "1029": "dr-hoshyar",
              "1030": "shahrak-shahid-bagheri",
              "1031": "chitgar-lake",
              "1032": "shahrak-daneshgahi",
              "1033": "shahrak-daneshgah-tehran",
              "1034": "sharif",
              "1035": "shirazi"
          }
      ],
      [
          1718,
          "جوادآباد",
          "javadabad"
      ],
      [
          820,
          "جوانرود",
          "javanrud"
      ],
      [
          834,
          "جویبار",
          "juybar"
      ],
      [
          808,
          "جهرم",
          "jahrom"
      ],
      [
          816,
          "جیرفت",
          "jiroft"
      ],
      [
          864,
          "چابکسر",
          "chaboksar"
      ],
      [
          747,
          "چابهار",
          "chabahar"
      ],
      [
          1686,
          "چاف و چمخاله",
          "chaf-chamkhale"
      ],
      [
          835,
          "چالوس",
          "chalus"
      ],
      [
          1694,
          "چمستان",
          "chamestan"
      ],
      [
          1732,
          "چناران",
          "chenaran"
      ],
      [
          1740,
          "چهارباغ",
          "charbagh-alborz"
      ],
      [
          782,
          "چهاردانگه",
          "chahar-dangeh"
      ],
      [
          871,
          "حمیدیا",
          "hamidia"
      ],
      [
          27,
          "خرم‌آباد",
          "khorramabad"
      ],
      [
          803,
          "خرمدره",
          "khorramdarreh"
      ],
      [
          799,
          "خرمشهر",
          "khorramshahr"
      ],
      [
          1689,
          "خشکبیجار",
          "khoshkbijar"
      ],
      [
          772,
          "خلخال",
          "khalkhal"
      ],
      [
          839,
          "خمین",
          "khomein"
      ],
      [
          1736,
          "خواف",
          "khaf"
      ],
      [
          1727,
          "خوانسار",
          "khansar"
      ],
      [
          767,
          "خوی",
          "khoy"
      ],
      [
          809,
          "داراب",
          "darab"
      ],
      [
          1724,
          "داران",
          "daran"
      ],
      [
          805,
          "دامغان",
          "damghan"
      ],
      [
          23,
          "دزفول",
          "dezful"
      ],
      [
          783,
          "دماوند",
          "damavand"
      ],
      [
          752,
          "دورود",
          "dorud"
      ],
      [
          874,
          "دوگنبدان",
          "dogonbadan"
      ],
      [
          822,
          "دهدشت",
          "dehdasht"
      ],
      [
          777,
          "دهلران",
          "dehloran"
      ],
      [
          745,
          "رامسر",
          "ramsar"
      ],
      [
          800,
          "رامهرمز",
          "ramhormoz"
      ],
      [
          12,
          "رشت",
          "rasht"
      ],
      [
          1684,
          "رضوانشهر",
          "rezvanshahr"
      ],
      [
          817,
          "رفسنجان",
          "rafsanjan"
      ],
      [
          826,
          "رودسر",
          "rudsar"
      ],
      [
          1698,
          "رویان",
          "royan"
      ],
      [
          706,
          "زابل",
          "zabol"
      ],
      [
          11,
          "زاهدان",
          "zahedan"
      ],
      [
          867,
          "زرند",
          "zarand"
      ],
      [
          20,
          "زنجان",
          "zanjan"
      ],
      [
          1683,
          "زیباکنار",
          "zibakenar"
      ],
      [
          22,
          "ساری",
          "sari"
      ],
      [
          671,
          "ساوه",
          "saveh"
      ],
      [
          316,
          "سبزوار",
          "sabzevar"
      ],
      [
          852,
          "سراب",
          "sarab"
      ],
      [
          865,
          "سراوان-سیستان و بلوچستان",
          "saravan"
      ],
      [
          854,
          "سرپل ذهاب",
          "sarpol-zahab"
      ],
      [
          1700,
          "سرخرود",
          "sorkhrood"
      ],
      [
          857,
          "سردشت",
          "sardasht"
      ],
      [
          812,
          "سقز",
          "saqqez"
      ],
      [
          768,
          "سلماس",
          "salmas"
      ],
      [
          1699,
          "سلمان‌شهر",
          "salman-shahr"
      ],
      [
          35,
          "سمنان",
          "semnan"
      ],
      [
          1725,
          "سمیرم",
          "semirom"
      ],
      [
          855,
          "سنقر",
          "sonqor"
      ],
      [
          28,
          "سنندج",
          "sanandaj"
      ],
      [
          756,
          "سوسنگرد",
          "susangerd"
      ],
      [
          761,
          "سهند",
          "sahand"
      ],
      [
          861,
          "سیاهکل",
          "siahkal"
      ],
      [
          818,
          "سیرجان",
          "sirjan"
      ],
      [
          1713,
          "شاهدشهر",
          "shahedshahr"
      ],
      [
          707,
          "شاهرود",
          "shahroud"
      ],
      [
          858,
          "شاهین دژ",
          "shahin-dej"
      ],
      [
          1717,
          "شمشک",
          "shemshak"
      ],
      [
          754,
          "شوش",
          "shush"
      ],
      [
          602,
          "شوشتر",
          "shooshtar"
      ],
      [
          36,
          "شهرکرد",
          "shahrekord"
      ],
      [
          6,
          "شیراز",
          "shiraz",
          {
              "500": "sadra-phase2",
              "502": "shahrak-golestaan",
              "503": "moaliabad",
              "504": "marvdasht",
              "505": "molla-sadra",
              "506": "modarresblvd",
              "507": "farhang-shahr",
              "509": "atlasi",
              "511": "rahmat-boulevard",
              "512": "tachara",
              "513": "valfajr",
              "514": "kazerun",
              "515": "ghasr-dasht",
              "516": "mianrood",
              "517": "seraj",
              "521": "amir-kabir",
              "522": "eram-shiraz",
              "523": "sattar-khan",
              "524": "kolbeh",
              "526": "fasa",
              "527": "fazilat-boulevard",
              "529": "zand",
              "530": "nasr",
              "531": "east-ghodoosi",
              "532": "west-ghodoosi",
              "533": "zargari",
              "534": "saadi-cinema",
              "535": "afif-abad",
              "536": "shahrak-beheshti",
              "537": "shahrak-rokn-abad",
              "538": "bani-hashemi",
              "540": "goldasht-hafez",
              "542": "shahrak-parvaaz",
              "543": "edalat-boulevard",
              "544": "kholde-barin",
              "548": "paygah-havayi",
              "550": "fargaz",
              "551": "jomhoori",
              "552": "azaadi",
              "554": "shahrak-motahhari",
              "555": "besat",
              "563": "kuy-zahra",
              "640": "ziba-shahr",
              "1251": "siloo",
              "1253": "bagh-e-takht",
              "1254": "tappeh-telviziyoun",
              "1255": "chencheneh",
              "1256": "kuy-valiasr",
              "1257": "shahrak-isar",
              "1258": "darvazeh",
              "1259": "dinakan",
              "1260": "mansoor-abad",
              "1261": "shahrak-bahonar",
              "1262": "goldasht-mohammadi",
              "1263": "shahrak-erfan",
              "1264": "goldasht-moaliabad",
              "1266": "shahrak-bootan",
              "1268": "javadiyeh",
              "1269": "pardis-town",
              "1270": "arian-town",
              "1271": "hossein-abad",
              "1272": "bezin-town",
              "1276": "north-shahrak-golestan",
              "1279": "talkh-e-dash",
              "1281": "kuy-azadi",
              "1282": "shah-gholi-beigi",
              "1283": "derki",
              "1286": "kuy-yas",
              "1287": "golshan",
              "1288": "kuy-ghozat",
              "1289": "janbazan",
              "1292": "gouyom",
              "1293": "fajr-town",
              "1294": "dokuhak",
              "1295": "qasre-qomsheh",
              "1297": "shahrak-e-mokhaberat",
              "1299": "niayesh",
              "1300": "mahmoudieh",
              "1303": "shahrak-modares",
              "1304": "shahrak-mahdiabad",
              "1305": "farzanegan",
              "1306": "hoveyzeh",
              "1307": "rezvan",
              "1308": "farhangian",
              "1309": "jamaran",
              "1310": "ahmad-abad",
              "1311": "shahrak-imam-hossein",
              "1312": "sajjadieh",
              "1313": "mahdiyeh",
              "1314": "shahrak-e-shahid-navvab-e-safavi",
              "1315": "shahrak-valiasr",
              "1317": "mohammadiyeh",
              "1318": "goldasht",
              "1320": "kuy-farhangian",
              "1321": "shahrak-golha",
              "1323": "vazir-abad",
              "1324": "sahl-abad",
              "1325": "ghale-no",
              "1326": "mehregan",
              "1327": "koshkek",
              "1328": "mah-firouzan",
              "1330": "ali-abad",
              "1331": "nasr-abad",
              "1332": "dastkhezr",
              "1333": "sharif-abad",
              "1334": "pdonak",
              "1335": "bonakdaran",
              "1336": "shahrak-nirou-entezamie",
              "1337": "deh-pialeh",
              "1338": "sheikh-ali-choupan",
              "1339": "lashkari",
              "1340": "shiraz-cemetery",
              "1341": "hojat-abad",
              "1342": "saman",
              "1343": "shahrak-bargh",
              "1344": "shahrak-daraie",
              "1345": "moslem",
              "1347": "maqar",
              "1348": "ghaleh-shahzadeh-bagom",
              "1349": "shishehgari",
              "1350": "shahid-bahonar-university",
              "1351": "saheb-al-zaman",
              "1352": "emam-hosein",
              "1353": "golkoub",
              "1354": "dabbagh-khaneh",
              "1355": "ghaleh-ghebleh",
              "1356": "tondgooyan",
              "1357": "laleh",
              "1358": "zerehi",
              "1359": "abyari",
              "1360": "eslahnejad",
              "1361": "tahavoli",
              "1362": "bazaar",
              "1363": "god-araban",
              "1364": "bala-kaft",
              "1365": "eshagh-beyg",
              "1366": "ahmadi",
              "1367": "lab-e-ab",
              "1368": "shah-square",
              "1369": "sar-bagh",
              "1370": "kuy-sang-siah",
              "1371": "darvazeh-kazeroon",
              "1372": "dozak",
              "1373": "vesal",
              "1374": "abiverdi",
              "1375": "chogiah",
              "1376": "pardis-of-eram",
              "1378": "kian-shahr",
              "1379": "sharak-e-sadi",
              "1380": "kuy-tollab",
              "1381": "saadiyeh",
              "1382": "abunasr",
              "1383": "karandish",
              "1384": "hafeziyeh",
              "1385": "tal-e-hosseinabad",
              "1386": "kaftarak",
              "1387": "chogha",
              "1388": "berijestoon",
              "1390": "rahmat-abad",
              "1391": "khalili",
              "1393": "west-moshir",
              "1395": "rishmak",
              "1396": "neshat",
              "1398": "mahdi-abad",
              "1401": "haft-tanan",
              "1402": "koozehgari",
              "1403": "fazl-abad",
              "1404": "abjavar",
              "1405": "saheb-divan",
              "1406": "dasht-chenaran",
              "1407": "mehrab",
              "1408": "kimia-villa-complex",
              "1409": "torkan",
              "1410": "sait-edari",
              "1411": "barbari-terminal",
              "1416": "narenjestan",
              "1417": "pay-kata",
              "1418": "shahid-amiri"
          }
      ],
      [
          795,
          "شیروان",
          "shirvan"
      ],
      [
          1712,
          "صباشهر",
          "sabashahr"
      ],
      [
          810,
          "صدرا-فارس",
          "sadra"
      ],
      [
          1710,
          "صفادشت",
          "safadasht-industrial-city"
      ],
      [
          827,
          "صومعه‌سرا",
          "someh-sara"
      ],
      [
          850,
          "طالقان",
          "taleqan"
      ],
      [
          788,
          "طبس",
          "tabas"
      ],
      [
          1697,
          "عباس‌آباد",
          "abbasabad-mazandaran"
      ],
      [
          823,
          "علی‌آباد کتول",
          "aliabad-katul"
      ],
      [
          786,
          "فرخ‌شهر",
          "farrokhshahr"
      ],
      [
          789,
          "فردوس",
          "ferdows"
      ],
      [
          1716,
          "فردوسیه",
          "ferdosiye"
      ],
      [
          836,
          "فریدون‌کنار",
          "fereydunkenar"
      ],
      [
          849,
          "فلاورجان",
          "falavarjan"
      ],
      [
          860,
          "فومن",
          "fuman"
      ],
      [
          1734,
          "فیروزآباد",
          "firuzabad"
      ],
      [
          665,
          "قائم‌شهر",
          "qaemshahr"
      ],
      [
          1733,
          "قاسم‌آباد (خواف)",
          "qasemabad-khaf"
      ],
      [
          790,
          "قاين",
          "ghayen"
      ],
      [
          813,
          "قروه",
          "qorveh"
      ],
      [
          19,
          "قزوین",
          "qazvin"
      ],
      [
          660,
          "قشم",
          "qeshm"
      ],
      [
          8,
          "قم",
          "qom",
          {
              "600": "pardisan-qom",
              "601": "safaeieh",
              "603": "19-dey",
              "604": "bonyad",
              "605": "emam",
              "606": "shahid-sadooqi",
              "607": "tohid",
              "608": "amin-boulevard",
              "609": "azadegan",
              "610": "salarieh",
              "611": "azar",
              "612": "haram",
              "613": "dourshahr",
              "614": "shahrak-qods",
              "615": "jomhoori-eslami",
              "616": "attaran",
              "617": "honarestan-qom",
              "618": "somayeh",
              "619": "haft-e-tir-qom",
              "620": "kalhori",
              "621": "safa-shahar",
              "622": "ensejam",
              "623": "keyvanfar",
              "624": "police",
              "625": "ammar-yasir",
              "626": "payame-noor",
              "627": "danial",
              "628": "yazdan-shahr",
              "629": "enqelab",
              "630": "ansar-alhossein",
              "631": "emamzade-ebrahim",
              "632": "modarres",
              "633": "15-khordad",
              "634": "kashani-boulevard",
              "635": "shahid-beheshti",
              "636": "golzar"
          }
      ],
      [
          804,
          "قیدار",
          "qeydar"
      ],
      [
          30,
          "کاشان",
          "kashan"
      ],
      [
          2,
          "کرج",
          "karaj",
          {
              "565": "fardis",
              "566": "gohardasht",
              "567": "mehrshahr",
              "568": "golshahr",
              "569": "azimieh",
              "570": "shahinvila",
              "571": "mehrvila",
              "572": "jahanshahr",
              "573": "baghestan",
              "574": "hashtgerd",
              "575": "hashtgerd-new-city",
              "576": "andisheh-new-town",
              "577": "marlik",
              "578": "mohammad-shahr",
              "579": "hesarak",
              "580": "mesbah",
              "581": "kamalshahr",
              "582": "kianmehr",
              "583": "mahdasht",
              "584": "shahriar-karaj",
              "585": "haft-e-tir",
              "586": "taleghani-karaj",
              "587": "manzariyeh-karaj",
              "588": "khorramdasht",
              "589": "azadegan",
              "590": "banafsheh",
              "591": "dehghanvila",
              "592": "malard",
              "593": "meshkindasht",
              "594": "vahdat-town",
              "596": "shahrak-owj",
              "597": "sasani",
              "598": "derakhti",
              "1038": "kuy-zanbaq",
              "1039": "kuy-mehr",
              "1040": "abrisham",
              "1041": "aq-tappeh",
              "1042": "asadabad",
              "1043": "rajababad",
              "1044": "hosseinabad",
              "1045": "ahadabad",
              "1046": "kuy-farhang",
              "1047": "shabanabad",
              "1048": "malekabad",
              "1049": "akhtarabad",
              "1050": "shahrak-sohrabiyeh",
              "1051": "akhgarabad",
              "1052": "raazi-town",
              "1053": "shahrak-nahal-va-bazr",
              "1054": "golestan",
              "1055": "kuy-bahar",
              "1056": "akbarabad",
              "1057": "shahrak-yas",
              "1058": "350-metri",
              "1059": "golha",
              "1064": "shahrak-zafar",
              "1066": "shahrak-ostadan",
              "1067": "karaj-no",
              "1069": "south-kuy-karmandan",
              "1070": "hyderabad",
              "1071": "kuy-emamiyeh",
              "1072": "aseman-town",
              "1073": "baharestan-industrial-town",
              "1074": "mahmodabad",
              "1075": "shahrak-ali-ebn-abitaleb",
              "1076": "north-kuy-karmandan",
              "1077": "golshahrvila",
              "1078": "ettehad",
              "1079": "valiasr",
              "1080": "dowlatabad",
              "1081": "esfahaniha",
              "1083": "chaharsad-dastgah",
              "1084": "shahrake-fahmideh",
              "1086": "kuy-modarres",
              "1088": "kuy-farhangian",
              "1089": "shahrak-imam-reza",
              "1091": "pishahangi",
              "1092": "goldasht",
              "1093": "kalak",
              "1094": "jahan-nama",
              "1095": "kalak-no",
              "1096": "shahrak-alborz",
              "1097": "mehrshahr-5",
              "1099": "chaman",
              "1101": "eslamabad",
              "1104": "bahar",
              "1105": "Baraghan",
              "1111": "samandehi",
              "1112": "mehrshahr-2",
              "1113": "mehrshahr-3",
              "1114": "mehrshar-1"
          }
      ],
      [
          750,
          "کردکوی",
          "kordkuy"
      ],
      [
          13,
          "کرمان",
          "kerman"
      ],
      [
          9,
          "کرمانشاه",
          "kermanshah"
      ],
      [
          863,
          "کلاچای",
          "kelachay"
      ],
      [
          1695,
          "کلارآباد",
          "kelarabad"
      ],
      [
          1696,
          "کلاردشت",
          "kelarestan"
      ],
      [
          1692,
          "کلاله",
          "kalale"
      ],
      [
          821,
          "کنگاور",
          "kangavar"
      ],
      [
          831,
          "کوهدشت",
          "kuhdasht"
      ],
      [
          1738,
          "کوهسار",
          "koohsar"
      ],
      [
          1708,
          "کهریزک",
          "kahrizak"
      ],
      [
          1687,
          "کیاشهر",
          "kiashahr"
      ],
      [
          33,
          "کیش",
          "kish"
      ],
      [
          1719,
          "کیلان",
          "kilan"
      ],
      [
          21,
          "گرگان",
          "gorgan"
      ],
      [
          1720,
          "گرمدره",
          "garmdareh"
      ],
      [
          806,
          "گرمسار",
          "garmsar"
      ],
      [
          848,
          "گلپایگان",
          "golpayegan"
      ],
      [
          1706,
          "گلستان",
          "golestan-baharestan"
      ],
      [
          749,
          "گمیشان",
          "gomishan"
      ],
      [
          847,
          "گناباد",
          "gonabad"
      ],
      [
          743,
          "گنبد کاووس",
          "gonbad-kavus"
      ],
      [
          1730,
          "لار",
          "lar"
      ],
      [
          1731,
          "لامرد",
          "lamerd"
      ],
      [
          746,
          "لاهیجان",
          "lahijan"
      ],
      [
          787,
          "لردگان",
          "lordegan"
      ],
      [
          1690,
          "لشت نشا",
          "lashtenesha"
      ],
      [
          828,
          "لنگرود",
          "langarud"
      ],
      [
          862,
          "ماسال",
          "masal"
      ],
      [
          856,
          "ماکو",
          "maku"
      ],
      [
          840,
          "محلات",
          "mahalat"
      ],
      [
          873,
          "محمدیه-قزوین",
          "mohammadiyeh"
      ],
      [
          837,
          "محمودآباد",
          "mahmudabad"
      ],
      [
          762,
          "مراغه",
          "maragheh"
      ],
      [
          763,
          "مرند",
          "marand"
      ],
      [
          814,
          "مریوان",
          "marivan"
      ],
      [
          317,
          "مسجد سلیمان",
          "masjed-soleyman"
      ],
      [
          773,
          "مشکین‌شهر",
          "meshgin-shahr"
      ],
      [
          3,
          "مشهد",
          "mashhad",
          {
              "428": "ghasem-abad",
              "430": "vakilabad",
              "431": "azadshahr",
              "432": "hashemiye",
              "433": "reza-shahr",
              "435": "sajjad-shahr",
              "436": "tollab",
              "437": "abutaleb",
              "439": "felestin",
              "440": "ahmadabad",
              "442": "rahnamaei",
              "443": "kolahdouz",
              "444": "goharshad",
              "447": "faramaz-abbasi",
              "449": "south-motahari",
              "450": "tabarsi",
              "451": "mosalla",
              "452": "17-shahrivar",
              "453": "toroq",
              "454": "torghabeh",
              "457": "kuh-sangi",
              "458": "beheshti",
              "460": "sayyad-shirazi",
              "461": "nofel-loshato",
              "462": "sanabaad",
              "463": "daneshjoo",
              "464": "seyyed-razi",
              "465": "abdol-motalleb",
              "466": "golbahar",
              "467": "haft-e-tir",
              "473": "emam-khomeini",
              "474": "holy-shrine",
              "476": "meydan-adl-khomeini",
              "477": "honarestan",
              "478": "imam-reza",
              "479": "mousavi-ghoochani",
              "481": "torbat-heydariyeh",
              "485": "kashmar",
              "486": "zed-square",
              "487": "shandiz",
              "488": "elahiyeh-boulevard",
              "489": "kuy-mahdi",
              "490": "barq-square",
              "491": "sadi",
              "493": "quchan",
              "495": "east-gaaz",
              "497": "janbaz",
              "498": "resalat",
              "642": "toos-boulevard",
              "643": "shahrak-rajayi",
              "1117": "shahrara",
              "1118": "shahrak-e-niru-ye-havayi",
              "1119": "shahrak-e-chahar-cheshmeh",
              "1120": "kuy-e-sarafrazan",
              "1122": "kuy-e-kowsar",
              "1124": "ferdowsi-university-of",
              "1125": "Shahrak-e-Taleqani",
              "1127": "jahedshahr",
              "1129": "fareqoltahsilan",
              "1130": "amiriyeh",
              "1131": "sattari",
              "1132": "sadaf",
              "1133": "farhang",
              "1134": "eqbal",
              "1137": "mahdiabad",
              "1138": "hojjat",
              "1139": "baharan",
              "1141": "fadak",
              "1143": "kuy-e-amiralmomenin",
              "1144": "keshavaz",
              "1145": "sepad",
              "1146": "bahman",
              "1147": "pardis",
              "1148": "kuy-e-nane-razavi",
              "1149": "isargaran",
              "1151": "shafa",
              "1153": "samarghand",
              "1154": "shahid-honarvar",
              "1155": "north-shahid-mottahari",
              "1156": "ayatollah-ebadi",
              "1162": "ershad",
              "1163": "majd",
              "1165": "amel",
              "1169": "malek-abad-garden",
              "1170": "10-day",
              "1172": "rahahan",
              "1173": "iman",
              "1174": "koushesh",
              "1175": "jannat",
              "1176": "abkuh",
              "1177": "shahrak-e-hashmenizhad",
              "1178": "fatemiye",
              "1180": "balal",
              "1181": "khaje-rabi",
              "1182": "kuy-e-daravey",
              "1183": "sis-abad",
              "1184": "north-tabars",
              "1185": "samen",
              "1186": "shahid-qorbani",
              "1187": "kuy-e-raddeh",
              "1188": "kuy-e-panj-tan",
              "1189": "shahid-avini",
              "1190": "kuy-e-amiralmonmenin",
              "1191": "abbas-abad",
              "1192": "vahid",
              "1193": "abouzar",
              "1194": "telgerd",
              "1195": "ansar",
              "1196": "mooud",
              "1197": "poursina",
              "1198": "bahonar",
              "1199": "sajadieh",
              "1200": "isar",
              "1201": "golshour",
              "1202": "mehrabad",
              "1203": "hoseynabad",
              "1204": "rezaieyeh",
              "1205": "noghan",
              "1206": "kuy-e-bala-khiaban",
              "1207": "kuy-e-paein-khiaban",
              "1208": "eidgah",
              "1210": "ayatollah-khamenei",
              "1211": "charbagh",
              "1212": "danesh",
              "1213": "salam",
              "1214": "onsori",
              "1215": "dehnavi",
              "1216": "shahid-maqoul",
              "1217": "amirabad",
              "1218": "karmandan-e-dovom",
              "1219": "karmandan-e-aval",
              "1220": "chahnou",
              "1221": "shiroudi",
              "1222": "kuy-e-karagaran",
              "1223": "kuy-e-agha-mostafa-khomeini",
              "1225": "mohammadabad",
              "1226": "Shahrak-e-Shirin",
              "1227": "moqadam",
              "1228": "parvin-etesami",
              "1229": "neyzeh",
              "1230": "panj-tan-al-e-abba",
              "1232": "valiasr",
              "1234": "kuy-e-police",
              "1235": "Kuy-e-Seyyedi",
              "1236": "mashhad-hashemi-nejad-international-airport",
              "1237": "enqelab",
              "1238": "baharestan",
              "1239": "shahrak-e-abuzar",
              "1240": "robat-e-Toroq",
              "1241": "asgariyeh",
              "1242": "ivan",
              "1247": "arvand",
              "1613": "mashhad-international-exhibition"
          }
      ],
      [
          843,
          "ملایر",
          "malayer"
      ],
      [
          769,
          "مهاباد",
          "mahabad"
      ],
      [
          792,
          "میاندوآب",
          "miandoab"
      ],
      [
          764,
          "میانه",
          "mianeh"
      ],
      [
          845,
          "میبد",
          "meybod"
      ],
      [
          841,
          "میناب",
          "minab"
      ],
      [
          1693,
          "مینودشت",
          "minoodasht"
      ],
      [
          31,
          "نجف‌آباد",
          "najafabad"
      ],
      [
          784,
          "نسیم‌شهر",
          "nasimshahr"
      ],
      [
          774,
          "نظرآباد",
          "nazarabad"
      ],
      [
          770,
          "نقده",
          "naqadeh"
      ],
      [
          838,
          "نکا",
          "neka"
      ],
      [
          744,
          "نور",
          "nur"
      ],
      [
          753,
          "نورآباد",
          "nurabad"
      ],
      [
          709,
          "نوشهر",
          "nowshahr"
      ],
      [
          844,
          "نهاوند",
          "nahavand"
      ],
      [
          1726,
          "نی‌ریز",
          "neyriz"
      ],
      [
          318,
          "نیشابور",
          "neyshabur"
      ],
      [
          1711,
          "وحیدیه",
          "vahidieh"
      ],
      [
          14,
          "همدان",
          "hamedan"
      ],
      [
          38,
          "یاسوج",
          "yasuj"
      ],
      [
          16,
          "یزد",
          "yazd"
      ]
  ]
}