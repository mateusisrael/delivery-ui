
interface PageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: PageProps) {
  
  return (
    <div>
      Hello Product {params.id}
    </div>
  )
}
