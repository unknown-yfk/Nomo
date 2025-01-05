

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from 'lucide-react'

const MapPage = () => {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <section className="py-8 sm:py-12 md:py-16 lg:py-[160px]">
        <div className="containers px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div style={{ filter: 'invert(1) hue-rotate(180deg)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.9631935332186!2d24.738350576869387!3d48.916093496643455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c3d7ff25bc91%3A0xd4b6a5ad6531c10e!2z0YPQuy4g0JjQstCw0YHRjtC60LAsIDg0LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNzYwMDA!5e0!3m2!1sru!2ssk!4v1734522030520!5m2!1sru!2ssk"
                  width="100%"
                  height="600"
                  style={{ border: '0' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
            <div className="lg:self-start">
              <Card className="bg-white text-[#0f0f0f] overflow-hidden">
                <CardHeader className="bg-[#FF8D2A] text-white p-6">
                  <CardTitle className="text-3xl font-bold">Наш офіс</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-[#FF8D2A]" />
                      <p className="text-lg">вул. Івасюка, 84, Івано-Франківськ, Івано-Франківська область, Україна, 76000</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 mr-3 flex-shrink-0 text-[#FF8D2A]" />
                      <p className="text-lg">+380 (50) 123-45-67</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 mr-3 flex-shrink-0 text-[#FF8D2A]" />
                      <p className="text-lg">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#FF8D2A] hover:bg-[#FF8D2A]/90 text-white text-lg py-6">
                    Зв'язатися з нами
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MapPage

