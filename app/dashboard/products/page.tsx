import Image from "next/image"

const mockProducts = [
    { id: 1, name: "Modular Velvet Sofa", price: "$1,299", category: "Furniture", status: "In Stock" },
    { id: 2, name: "Oak Dining Table", price: "$850", category: "Furniture", status: "Low Stock" },
    { id: 3, name: "Ceramic Vase Set", price: "$120", category: "Decor", status: "Out of Stock" },
    { id: 4, name: "Minimalist Floor Lamp", price: "$299", category: "Lighting", status: "In Stock" },
    { id: 5, name: "Linen Lounge Chair", price: "$599", category: "Furniture", status: "In Stock" },
    { id: 6, name: "Abstract Canvas Art", price: "$450", category: "Art", status: "In Stock" },
]

export default function ProductsPage() {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8 w-full max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif font-bold tracking-wide text-foreground">Products</h1>
                    <p className="text-muted-foreground mt-1 text-sm">Manage your product catalog</p>
                </div>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors">
                    Add Product
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {mockProducts.map((product) => (
                    <div key={product.id} className="group relative rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-accent flex flex-col">
                        <div className="aspect-square relative rounded-lg bg-muted overflow-hidden mb-4">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-4xl">
                                IMG
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-lg leading-tight group-hover:text-accent transition-colors">{product.name}</h3>
                                <span className="font-medium">{product.price}</span>
                            </div>
                            <p className="text-sm border border-border bg-background rounded-full px-2 py-0.5 inline-block w-fit mb-auto text-muted-foreground">
                                {product.category}
                            </p>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                                <span className={`text-xs font-semibold ${product.status === "In Stock" ? "text-green-600 dark:text-green-400" :
                                        product.status === "Low Stock" ? "text-amber-600 dark:text-amber-400" :
                                            "text-destructive"
                                    }`}>
                                    {product.status}
                                </span>
                                <button className="text-xs font-medium text-accent hover:underline">Edit</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
