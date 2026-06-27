import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {
  FiArrowRight,
  FiAward,
  FiCheck,
  FiFeather,
  FiLayers,
  FiMessageCircle,
  FiRefreshCw,
  FiShoppingBag,
  FiTrendingUp,
  FiTruck
} from 'react-icons/fi'
import {products} from '../data'
import {ProductCard,SectionTitle} from '../components/UI'
import {publicAsset} from '../lib/assets'

const collections=[
  {title:'The Festive Edit',copy:'Modern heirlooms for meaningful celebrations.',image:publicAsset('images/products/rose-organza-saree.jpg')},
  {title:'Everyday, Elevated',copy:'Considered essentials in breathable natural fabrics.',image:publicAsset('images/products/stone-linen-shirt.jpg')},
  {title:'Occasion Tailoring',copy:'Sharp silhouettes, grounded in Indian craft.',image:publicAsset('images/products/midnight-bandhgala.jpg')}
]

const marquee=['New season arrivals','Premium Indian craft','Retail & wholesale ready','Pan-India delivery','Affordable luxury','Hand-checked quality']

const reveal={hidden:{opacity:0,y:34},show:{opacity:1,y:0,transition:{duration:.75,ease:[.22,1,.36,1]}}}
const stagger={hidden:{},show:{transition:{staggerChildren:.12}}}

function PremiumTicker(){
  return <div className="luxury-marquee" aria-label="Godavari brand highlights">
    <div className="marquee-track">{[...marquee,...marquee].map((item,index)=><span key={`${item}-${index}`}>{item}</span>)}</div>
  </div>
}

function BrandGraphic(){
  const stats=[['18','years of trusted craft'],['42','quality checks per collection'],['18k+','serviceable pin codes']]
  return <motion.section className="brand-graphic" aria-label="The Godavari design signature" initial="hidden" whileInView="show" viewport={{once:true,amount:.35}} variants={stagger}>
    <svg viewBox="0 0 800 260" role="img" aria-label="Abstract river and textile weave motif">
      <defs><linearGradient id="g" x1="0" x2="1"><stop stopColor="#9d7536"/><stop offset="1" stopColor="#e4c785"/></linearGradient></defs>
      <motion.path d="M-20 194C100 58 202 45 319 154s229 98 501-76" fill="none" stroke="url(#g)" strokeWidth="2" initial={{pathLength:0,opacity:.35}} whileInView={{pathLength:1,opacity:1}} viewport={{once:true}} transition={{duration:1.4,ease:'easeInOut'}}/>
      <motion.path d="M-20 214C102 81 207 68 324 174s228 91 496-72" fill="none" stroke="url(#g)" strokeWidth="1" opacity=".45" initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1.6,delay:.18,ease:'easeInOut'}}/>
      <circle cx="400" cy="130" r="92" fill="none" stroke="currentColor" opacity=".13"/>
      <circle cx="400" cy="130" r="69" fill="none" stroke="currentColor" opacity=".13"/>
      <path d="M400 52v156M322 130h156" stroke="currentColor" opacity=".12"/>
      <text x="400" y="124" textAnchor="middle">GODAVARI</text>
      <text x="400" y="151" textAnchor="middle" className="small">CLOTH · CRAFT · COMMUNITY</text>
    </svg>
    {stats.map(([number,label])=><motion.div key={label} variants={reveal}><span>{number}</span><p>{label}</p></motion.div>)}
  </motion.section>
}

function EditorialShowcase(){
  return <section className="editorial-showcase wrap">
    <motion.div className="editorial-copy" initial="hidden" whileInView="show" viewport={{once:true,amount:.35}} variants={stagger}>
      <motion.span className="eyebrow" variants={reveal}>New luxury language</motion.span>
      <motion.h2 variants={reveal}>Minimal silhouettes with a quiet, cinematic finish.</motion.h2>
      <motion.p variants={reveal}>Godavari pieces are styled for modern Indian wardrobes: clean lines, refined texture, breathable comfort, and enough presence to feel special without feeling loud.</motion.p>
      <motion.div className="micro-stats" variants={stagger}>
        {[[FiFeather,'Soft handfeel'],[FiLayers,'Layered styling'],[FiAward,'Quality first']].map(([Icon,label])=><motion.div key={label} variants={reveal}><Icon/><span>{label}</span></motion.div>)}
      </motion.div>
    </motion.div>
    <motion.div className="editorial-collage" initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.25}} transition={{duration:.9,ease:[.22,1,.36,1]}}>
      <motion.img className="collage-main" src={publicAsset('images/products/black-drape-dress.jpg')} alt="Black draped dress editorial look" loading="lazy" whileHover={{scale:1.025}}/>
      <motion.img className="collage-secondary" src={publicAsset('images/products/wine-silk-kurta.jpg')} alt="Wine silk kurta premium detail" loading="lazy" animate={{y:[0,-10,0]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}}/>
      <motion.img className="collage-third" src={publicAsset('images/products/handloom-sand-saree.jpg')} alt="Sand handloom saree texture" loading="lazy" animate={{y:[0,12,0]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}}/>
      <div className="floating-label"><span>SS 2026</span><strong>Editorial Drop</strong></div>
    </motion.div>
  </section>
}

function ExperienceRail(){
  const steps=[
    [FiTrendingUp,'01','Discover','Browse curated edits designed for real wardrobes.'],
    [FiShoppingBag,'02','Select','Save favourites, choose sizes, and request availability.'],
    [FiMessageCircle,'03','Confirm','Our team supports retail, wholesale, and custom enquiries.'],
    [FiTruck,'04','Deliver','Tracked dispatch with careful packaging across India.']
  ]
  return <motion.section className="experience-rail wrap" initial="hidden" whileInView="show" viewport={{once:true,amount:.25}} variants={stagger}>
    {steps.map(([Icon,number,title,copy])=><motion.article key={title} variants={reveal} className="experience-card">
      <Icon/>
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </motion.article>)}
  </motion.section>
}

export default function Home(){
  return <>
    <section className="hero hero-modern">
      <img src={publicAsset('images/godavari-hero-v2.jpg')} alt="Godavari occasionwear campaign" fetchPriority="high" width="2000" height="1125"/>
      <div className="hero-grain"/>
      <motion.div className="hero-orb orb-one" animate={{y:[0,-22,0],rotate:[0,8,0]}} transition={{duration:8,repeat:Infinity,ease:'easeInOut'}}/>
      <motion.div className="hero-orb orb-two" animate={{y:[0,18,0],rotate:[0,-8,0]}} transition={{duration:9,repeat:Infinity,ease:'easeInOut'}}/>
      <div className="hero-copy">
        <motion.span initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.55}} className="eyebrow">The celebration edit · 2026</motion.span>
        <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.85,ease:[.22,1,.36,1],delay:.08}}>Rooted in craft.<br/><em>Made for now.</em></motion.h1>
        <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.22}}>Contemporary Indian clothing with quiet confidence, exceptional handfeel, and an honest price.</motion.p>
        <motion.div className="hero-buttons" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.34}}>
          <Link className="btn dark" to="/shop">Explore the collection <FiArrowRight/></Link>
          <Link className="text-link" to="/about">Discover our story</Link>
        </motion.div>
      </div>
      <motion.div className="hero-editorial-card" initial={{opacity:0,y:30,scale:.96}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.7,delay:.55,ease:[.22,1,.36,1]}}>
        <span>Featured drop</span>
        <strong>Ivory Chanderi Set</strong>
        <p>Lightweight festive tailoring with refined gold undertones.</p>
      </motion.div>
      <div className="hero-scroll-cue">Scroll <span/></div>
    </section>

    <PremiumTicker/>

    <motion.section className="brand-intro wrap" initial="hidden" whileInView="show" viewport={{once:true,amount:.35}} variants={stagger}>
      <motion.span variants={reveal}>G · E</motion.span>
      <motion.div variants={reveal}><p className="eyebrow">Our philosophy</p><h2>Clothes should feel special<br/>long after the occasion ends.</h2></motion.div>
      <motion.p variants={reveal}>We bring together enduring design, reliable craftsmanship, and accessible pricing—serving individual wardrobes and retail partners with equal care.</motion.p>
    </motion.section>

    <BrandGraphic/>
    <EditorialShowcase/>

    <section className="section wrap">
      <SectionTitle eyebrow="Curated for you" title="Shop the stories" action="/shop"/>
      <div className="collection-grid">{collections.map((c,i)=><motion.article key={c.title} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.65,delay:i*.08,ease:[.22,1,.36,1]}} whileHover={{y:-7}} className={i===0?'collection tall':'collection'}><img src={c.image} alt="" loading="lazy"/><div><span>0{i+1}</span><h3>{c.title}</h3><p>{c.copy}</p><Link to="/shop">Shop collection <FiArrowRight/></Link></div></motion.article>)}</div>
    </section>

    <ExperienceRail/>

    <section className="section wrap">
      <SectionTitle eyebrow="Just in" title="New arrivals" copy="Fresh pieces selected for the season ahead." action="/shop"/>
      <div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </section>

    <section className="story-band">
      <div className="story-image"><img src={publicAsset('images/products/ivory-chanderi-set.jpg')} alt="Ivory Chanderi craftsmanship detail" loading="lazy"/></div>
      <motion.div className="story-copy" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.35}} transition={{duration:.8,ease:[.22,1,.36,1]}}><span className="eyebrow">The Godavari standard</span><h2>Made with intention,<br/><em>checked by hand.</em></h2><p>From fabric selection to the final stitch, every piece passes through a considered quality process. Our manufacturing network blends practiced hands with dependable modern production.</p><Link className="btn light" to="/about">How we make <FiArrowRight/></Link></motion.div>
    </section>

    <section className="section wrap">
      <SectionTitle eyebrow="Most loved" title="Trending now"/>
      <div className="product-grid">{products.slice(4,8).map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </section>

    <section className="benefits">
      <motion.div className="wrap benefit-grid" initial="hidden" whileInView="show" viewport={{once:true,amount:.35}} variants={stagger}>{[[FiCheck,'Quality, assured','Every piece inspected before dispatch.'],[FiTruck,'Pan-India delivery','Tracked delivery to 18,000+ pin codes.'],[FiRefreshCw,'Easy exchanges','Simple 7-day size exchanges.'],[FiMessageCircle,'Human support','Real assistance on chat and phone.']].map(([Icon,t,c])=><motion.div key={t} variants={reveal}><Icon/><h3>{t}</h3><p>{c}</p></motion.div>)}</motion.div>
    </section>

    <section className="section testimonials wrap">
      <SectionTitle eyebrow="Worn & loved" title="Notes from our community"/>
      <motion.blockquote initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}>“The finish was exceptional for the price—and the team helped me choose the right size over WhatsApp. It felt personal from start to finish.”<footer><strong>Riya S.</strong><span>Verified customer · Pune</span></footer></motion.blockquote>
    </section>

    <section className="instagram">
      <div className="wrap insta-head"><span>@godavarienterprises</span><h2>From our journal</h2><a href="https://instagram.com" target="_blank" rel="noreferrer">Follow along <FiArrowRight/></a></div>
      <div className="insta-grid">{products.slice(0,5).map((p,index)=><motion.img key={p.id} src={p.images[0]} alt="" loading="lazy" whileHover={{scale:1.035}} transition={{duration:.35}} style={{transformOrigin:index%2?'top':'bottom'}}/>)}</div>
    </section>

    <section className="contact-cta">
      <div><span className="eyebrow">For retailers & boutiques</span><h2>Let's build something<br/>lasting together.</h2></div>
      <div><p>Discover dependable supply, considered collections, and responsive partnership for your store.</p><Link className="btn light" to="/contact">Start a conversation <FiArrowRight/></Link></div>
    </section>
  </>
}
