import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, LineChart, PieChart } from "lucide-react"

export default function EstadisticasPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Estadísticas</h1>
      </div>
      <Tabs defaultValue="ventas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ventas">Ventas</TabsTrigger>
          <TabsTrigger value="productos">Productos</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="impuestos">Impuestos</TabsTrigger>
        </TabsList>
        <TabsContent value="ventas" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Ventas Mensuales</CardTitle>
                <CardDescription>Comparativa de ventas por mes</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de ventas mensuales</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Tendencia de Ventas</CardTitle>
                <CardDescription>Evolución de ventas en el tiempo</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <LineChart className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de tendencia de ventas</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Ventas por Categoría</CardTitle>
                <CardDescription>Distribución de ventas por categoría de producto</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <PieChart className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de ventas por categoría</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Ventas por Método de Pago</CardTitle>
                <CardDescription>Distribución de ventas por método de pago</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <PieChart className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de ventas por método de pago</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="productos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Productos Más Vendidos</CardTitle>
                <CardDescription>Top 10 productos por volumen de ventas</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de productos más vendidos</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Rotación de Inventario</CardTitle>
                <CardDescription>Velocidad de rotación por producto</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <LineChart className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de rotación de inventario</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="clientes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Clientes por Volumen de Compra</CardTitle>
                <CardDescription>Top 10 clientes por volumen de compra</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de clientes por volumen</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Nuevos Clientes</CardTitle>
                <CardDescription>Adquisición de nuevos clientes por mes</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <LineChart className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de nuevos clientes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="impuestos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Impuestos Recaudados</CardTitle>
                <CardDescription>Total de impuestos recaudados por mes</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de impuestos recaudados</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Impuestos por Tipo</CardTitle>
                <CardDescription>Distribución de impuestos por tipo</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/10 rounded-md">
                  <PieChart className="h-16 w-16 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Gráfico de impuestos por tipo</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

