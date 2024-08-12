import { Card, CardContent } from "./ui/card"

const footer = () => {
  return (
    <footer className="mt-6">
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2023 Copyright <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default footer
