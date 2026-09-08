---
items:
  - name: "Ethiopian Yirgacheffe"
    description: "Bright floral notes with hints of citrus, medium roast."
    price: "₱150.00"
  - name: "Colombian Supremo"
    description: "Balanced body with caramel sweetness, medium roast."
    price: "₱140.00"
  - name: "Vietnamese Robusta Blend"
    description: "Bold, earthy flavor with a hint of chocolate, dark roast."
    price: "₱130.00"
  - name: "Dark Roast House Blend"
    description: "Rich, smoky, and bold, perfect for espresso lovers."
    price: "₱160.00"
---

<menu-section>
  <h2 class="font-cormorant text-xl sm:text-4xl text-[#F5F3EF] font-normal tracking-tight mb-4">Our Coffee Beans</h2>
  <ul class="space-y-3 text-[#B8B5AE] font-body-sm">
    {items.map((item) => (
      <li class="flex items-center justify-between">
        <span class="flex-1">{item.name}</span>
        <span class="text-right font-medium">{item.price}</span>
      </li>
    ))}
  </ul>
</menu-section>