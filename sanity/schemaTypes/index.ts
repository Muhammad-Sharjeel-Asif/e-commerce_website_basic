import { type SchemaTypeDefinition } from 'sanity'
import product from '../product'
import chef from '../chef'
import testimonial from '../testimonial'
import { blog } from '../blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, chef, testimonial, blog],
}
