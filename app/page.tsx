import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  Package,
  Receipt,
  ShieldCheck,
  Users,
  Sparkles,
  CheckCircle,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link className="flex items-center justify-center" href="#">
          <Receipt className="h-6 w-6 mr-2 text-primary" />
          <span className="text-lg font-bold">FacturaNext</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Características
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Precios
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Contacto
          </Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4 fade-in">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                  <Sparkles className="mr-1 h-3 w-3" /> Nuevo sistema de facturación
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    Sistema Completo de <span className="text-primary">Facturación Electrónica</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Gestiona tu inventario, ventas, facturación electrónica, cotizaciones y más en una sola plataforma
                    moderna e intuitiva.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="gap-1 hover-scale">
                      Comenzar ahora <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="hover-scale">
                      Ver demo
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-3 w-3 text-primary" />
                    <span>Fácil de usar</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-3 w-3 text-primary" />
                    <span>Soporte 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-3 w-3 text-primary" />
                    <span>Actualizaciones gratuitas</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
                  <img
                    alt="Dashboard Preview"
                    className="relative z-10 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center shadow-2xl hover-scale"
                    src="/placeholder.svg?height=550&width=800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary w-fit mx-auto">
                  <Sparkles className="mr-1 h-3 w-3" /> Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Características Principales</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Todo lo que necesitas para gestionar tu negocio en un solo lugar
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover-scale">
                <div className="rounded-full bg-primary/10 p-3">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Inventario</h3>
                <p className="text-center text-muted-foreground">
                  Gestiona tu inventario con facilidad, controla stock y recibe alertas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover-scale">
                <div className="rounded-full bg-primary/10 p-3">
                  <Receipt className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Facturación Electrónica</h3>
                <p className="text-center text-muted-foreground">
                  Genera facturas electrónicas válidas ante las autoridades fiscales.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover-scale">
                <div className="rounded-full bg-primary/10 p-3">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cotizaciones</h3>
                <p className="text-center text-muted-foreground">
                  Crea y envía cotizaciones profesionales a tus clientes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover-scale">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Estadísticas</h3>
                <p className="text-center text-muted-foreground">
                  Visualiza el rendimiento de tu negocio con gráficos detallados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover-scale">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Gestión de Clientes</h3>
                <p className="text-center text-muted-foreground">
                  Mantén una base de datos organizada de todos tus clientes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover-scale">
                <div className="rounded-full bg-primary/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Control de Roles</h3>
                <p className="text-center text-muted-foreground">
                  Asigna permisos específicos a cada miembro de tu equipo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary w-fit">
                  <Sparkles className="mr-1 h-3 w-3" /> Testimonios
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Lo que dicen nuestros clientes
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Miles de empresas confían en FacturaNext para su facturación electrónica
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border p-6 shadow-sm">
                    <p className="text-muted-foreground mb-4">
                      "FacturaNext ha transformado la manera en que gestionamos nuestras finanzas. El proceso de
                      facturación es ahora mucho más rápido y eficiente."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                        <span className="text-primary font-bold">JD</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Juan Díaz</h4>
                        <p className="text-sm text-muted-foreground">Director Financiero, TechSolutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border p-6 shadow-sm">
                    <p className="text-muted-foreground mb-4">
                      "La interfaz es intuitiva y el soporte técnico es excepcional. Recomendaría FacturaNext a
                      cualquier empresa."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                        <span className="text-primary font-bold">MR</span>
                      </div>
                      <div>
                        <h4 className="font-medium">María Rodríguez</h4>
                        <p className="text-sm text-muted-foreground">CEO, Innovatech</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="rounded-xl border p-6 shadow-sm bg-primary/5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Plan Empresarial</h3>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-primary text-primary-foreground">
                      Popular
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Facturación electrónica ilimitada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Gestión de inventario avanzada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Reportes personalizados</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Soporte prioritario 24/7</span>
                    </li>
                  </ul>
                  <Button className="w-full hover-scale">Comenzar ahora</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 FacturaNext. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
            href="#"
          >
            Términos de Servicio
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
            href="#"
          >
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

