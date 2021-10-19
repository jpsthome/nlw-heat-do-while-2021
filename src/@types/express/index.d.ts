// sobrescrevendo interface tipificação do express
// necessário adicionar "typeRoots": ["./src/@types", "@node_modules/@types"] ao tsconfig
declare namespace Express {
	export interface Request {
		user_id: string;
	}
}
