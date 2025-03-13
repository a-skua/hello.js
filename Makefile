.PHONY: all
all: calc.wasm

%.wasm: %.wat
	wasm-tools parse -o $@ $<
