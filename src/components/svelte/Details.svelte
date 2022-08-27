<div class="p-3 group flex flex-col">
    <p class="group-hover:opacity-0 group-hover:hidden">
        <slot name="title"  />
    </p>
<br>
<div class="flex group-hover:opacity-0 group-hover:hidden">
    <slot name="subTitle" />    
</div>
<div class="mt-2 text-red-600 w-full">
    <slot name="date" />
</div>
<div class="opacity-0 group-hover:opacity-100 hidden group-hover:inline-flex ">
    <slot name="description" />
</div>
</div>