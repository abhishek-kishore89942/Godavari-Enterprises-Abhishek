import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import {Toaster} from 'react-hot-toast'
import {AppProvider} from './context/AppContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import './styles.css'
import './admin.css'
import './responsive.css'
import './enhancements.css'
const About=lazy(()=>import('./pages/About'));const Contact=lazy(()=>import('./pages/Contact'));const Admin=lazy(()=>import('./pages/Admin').then(m=>({default:m.AdminDashboard})));const Login=lazy(()=>import('./pages/Admin').then(m=>({default:m.AdminLogin})));
class ErrorBoundary extends React.Component{constructor(p){super(p);this.state={error:false}}static getDerivedStateFromError(){return{error:true}}render(){return this.state.error?<div className="error-page"><h1>Something went wrong.</h1><button onClick={()=>location.reload()}>Try again</button></div>:this.props.children}}
function App(){return <ErrorBoundary><Suspense fallback={<div className="loader"><span/></div>}><Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/shop" element={<Shop/>}/><Route path="/product/:id" element={<Product/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/></Route><Route path="/admin/login" element={<Login/>}/><Route path="/admin" element={localStorage.getItem('godavari-admin')?<Admin/>:<Navigate to="/admin/login"/>}/><Route path="*" element={<Navigate to="/"/>}/></Routes></Suspense></ErrorBoundary>}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><HelmetProvider><BrowserRouter><AppProvider><App/><Toaster position="bottom-center"/></AppProvider></BrowserRouter></HelmetProvider></React.StrictMode>)
