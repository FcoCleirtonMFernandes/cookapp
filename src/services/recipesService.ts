import { supabase } from "./supabase"

async function findByIngredientsIds(ids: string[]) {
  const { data, error } = await supabase
    .rpc("recipes_by_ingredients", { ids })
    .returns<RecipeResponse[]>()
    if (error) console.error(error)
    else return data ?? []
}

async function show(id: string) {
  const { data } = await supabase
    .from("recipes")
    .select()
    .eq("id", id)
    .returns<RecipeResponse>()
    .single()

  return data
}

export { findByIngredientsIds, show }