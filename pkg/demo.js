import init, { t1 } from './rs.js';

async function run() {
    // 初始化 Wasm
    await init();

    // 获取输入并调用 wasm.t1
    document.getElementById('run').addEventListener('click', () => {
        const input = document.getElementById('input').value;
        const result = t1(input); // 调用 Wasm 函数
        document.getElementById('output').textContent = result;
    });
}

run();