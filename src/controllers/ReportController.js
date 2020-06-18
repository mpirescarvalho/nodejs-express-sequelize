const { Op } = require("sequelize");
const User = require("../model/User");

module.exports = {
	async show(req, res) {
		//Encontrar todos os usuários que tem email terminado em .dev
		//Desses usuários, buscar somente os que moram na rua "Rua bivar moitinho dourado"
		//Desses usuários, buscas as tecnologias que começam com React

		const users = await User.findAll({
			attributes: ["name", "email"],
			where: {
				email: {
					[Op.iLike]: "%.dev",
				},
			},
			include: [
				{
					association: "addresses",
					where: { street: "Rua bivar moitinho dourado" },
				},
				{
					association: "techs",
					required: false,
					where: {
						name: {
							[Op.iLike]: "React%",
						},
					},
				},
			],
		});

		return res.json(users);
	},
};
