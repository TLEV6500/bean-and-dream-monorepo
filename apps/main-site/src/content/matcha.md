---
items:
  - name: "Uji Matcha Powder"
    description: "Premium ceremonial grade matcha, vibrant green, earthy sweetness."
    price: "₱180.00"
  - name: "Matcha Latte Mix"
    description: "Ready-to-use mix for lattes, smooth and frothy."
    price: "₱150.00"
  - name: "Matcha Whisk Set"
    description: "Traditional bamboo whisk and scoop for perfect froth."
    price: "₱200.00"
  - name: "Matcha Energy Balls"
    description: "Handcrafted balls with matcha and local honey, a healthy boost."
    price: "₱120.00"
---

<menu-section>
  <h2 class="font-cormorant text-xl sm:text-4xl text-[#F5F3EF] font-normal tracking-tight mb-4">Premium Matcha</h2>
  <ul class="space-y-3 text-[#B8B5AE] font-body-sm">
    {items.map((item) => (
      <li class="flex items-center justify-between">
        <span class="flex-1">{item.name}</span>
        <span class="text-right font-medium">{item.price}</span>
      </li>
    ))}
  </ul>
</menu-section>