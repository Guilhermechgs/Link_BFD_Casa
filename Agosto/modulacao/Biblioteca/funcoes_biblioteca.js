
export function listarLivros(livros) {
    console.log("--- Lista de Livros Disponíveis ---");
    for (const livro of livros) {
        const status = livro.disponivel ? "Disponível" : "Emprestado";
        console.log(`- Título: ${livro.nome}, Autor: ${livro.autor} [${status}]`);
    }
    console.log("---------------------------------");
}

export function emprestarLivro(livros, nomeDoLivro) {
    const livroEncontrado = livros.find(livro => livro.nome.toLowerCase() === nomeDoLivro.toLowerCase());
    if (livroEncontrado) {
        if (livroEncontrado.disponivel) {
            livroEncontrado.disponivel = false;
            console.log(`\nO livro "${livroEncontrado.nome}" foi emprestado com sucesso!`);
        } else {
            console.log(`\nDesculpe, o livro "${livroEncontrado.nome}" já está emprestado.`);
        }
    } else {
        console.log(`\nDesculpe, não foi possível encontrar o livro "${nomeDoLivro}".`);
    }
}

export function DevolverLivro(livros, nomeDoLivro) {
    const livroEncontrado = livros.find(livro => livro.nome.toLowerCase() === nomeDoLivro.toLowerCase());
    if (livroEncontrado) {
        if (!livroEncontrado.disponivel) {
            livroEncontrado.disponivel = true;
            console.log(`\nO livro "${livroEncontrado.nome}" foi devolvido com sucesso!`);
        } else {
            console.log(`\nDesculpe, o livro "${livroEncontrado.nome}" já está devolvido.`);
        }
    } else {
        console.log(`\nDesculpe, não foi possível encontrar o livro "${nomeDoLivro}".`);
    }
}