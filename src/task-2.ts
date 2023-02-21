interface ITotalPriceProps {
	price: number
	discount: number
	isInstallment: boolean
	months: number
}

export const totalPrice = ({
	price,
	discount,
	isInstallment,
	months,
}: ITotalPriceProps): number => {
	if (isInstallment) {
		return (price - price * (discount / 100)) / months
	}

	return price - price * (discount / 100)
}
