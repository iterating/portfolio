import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { config } from '../../config'
import { clientsData } from './clientsData'

export default function Clientlogos() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section>
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="clients-logos">
                    <h4 className="scroll-animation" data-aos='fade-up'>{clientsData.heading}</h4>
                    <div className="row align-items-center">
                        {clientsData.clients.map((client) => (
                            <div key={client.id} className="col-md-3 scroll-animation" data-aos={client.animation}>
                                <img src={config.getAssetPath(client.image)} alt="Client"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
