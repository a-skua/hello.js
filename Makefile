.PHONY: all
all: calc.wasm

%.wasm: %.wat
	wasm-tools parse -o $@ $<

.PHONY: fmt
fmt:
	deno fmt
