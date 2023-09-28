interface Product {
  name: string;
  domestic: boolean;
  price: number;
  weight?: string;
  description: string;
}

const apiUrl =
  "https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1";

class receiptProgram {
  url: string;

  constructor(apiUrl: string) {
    this.url = apiUrl;
  }

  async fetchProducts() {
    const response = await fetch(this.url);
    const proudcts: Product[] | [] = await response.json();

    return proudcts;
  }

  private printGroupResult(products: Product[]) {
    products.sort((a, b) => a.name.localeCompare(b.name));

    products.forEach((product) => {
      console.log(`... ${product.name}`);
      console.log(`    Price: $${product.price.toFixed(1)}`);
      console.log(`    ${product.description.substring(0, 10)}...`);
      console.log(`    Weight: ${product.weight ? product.weight : "N/A"}`);
    });
  }

  private calculateTotal(products: Product[]) {
    return products.reduce((total, product) => total + product.price, 0);
  }

  printResult(products: Product[]) {
    const domesticProducts = products.filter((product) => product.domestic);
    const importedProducts = products.filter((product) => !product.domestic);

    console.log(`. Domestic`);
    this.printGroupResult(domesticProducts);

    console.log(`. Imported`);
    this.printGroupResult(importedProducts);

    console.log(
      `Domestic cost: $${this.calculateTotal(domesticProducts).toFixed(1)}`
    );
    console.log(
      `Imported cost: $${this.calculateTotal(importedProducts).toFixed(1)}`
    );
    console.log(`Domestic count: ${domesticProducts.length}`);
    console.log(`Imported count: ${importedProducts.length}`);
  }
}

(async () => {
  const program = new receiptProgram(apiUrl);
  const products = await program.fetchProducts();
  program.printResult(products);
})();
