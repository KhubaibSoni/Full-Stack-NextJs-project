import { defineField, defineType } from "sanity";

export const author = defineType({
title:"Author",
name:"author",
type:"document",
icon:'icon',
fields:[
    defineField({
        name:'id',
        type:"number"
    }),
    defineField({
        name:'name',
        type:"string"
    }),
    defineField({
        name:'username',
        type:"string"
    }),
    defineField({
        name:'email',
        type:"string"
    }),
    defineField({
        name:'image',
        type:"url"
    }),
    defineField({
        name:'bio',
        type:"string"
    })

]
  
})