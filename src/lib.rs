use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn t1(input: &str) -> String {
    // 实现逻辑：将字符串转为大写
    input.to_uppercase()
}

