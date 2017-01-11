const isUnitlessNumber = [
	"animationIterationCount",
	"borderImageOutset",
	"borderImageSlice",
	"borderImageWidth",
	"boxFlex",
	"boxFlexGroup",
	"boxOrdinalGroup",
	"columnCount",
	"flex",
	"flexGrow",
	"flexPositive",
	"flexShrink",
	"flexNegative",
	"flexOrder",
	"gridRow",
	"gridColumn",
	"fontWeight",
	"lineClamp",
	"lineHeight",
	"opacity",
	"order",
	"orphans",
	"tabSize",
	"widows",
	"zIndex",
	"zoom",

	// SVG-related properties
	"fillOpacity",
	"floodOpacity",
	"stopOpacity",
	"strokeDasharray",
	"strokeDashoffset",
	"strokeMiterlimit",
	"strokeOpacity",
	"strokeWidth"
];

export default function setStyleToElement(elm: HTMLElement, style: React.CSSProperties, setToCSSText = true) {
	let cssText = "";
	for (const property in style) {
		const propertyNow = [].map.call(property, (str: string) => str === str.toUpperCase() ? `-${str.toLowerCase()}` : str).join("");
		if (setToCSSText) {
			let value: any = style[property];
			if (typeof value === "number" && !isUnitlessNumber.includes(propertyNow)) value = `${value}px`;
			if (typeof value === "object") {
				if (Array.isArray(value)) {
					value = value[value.length - 1];
				} else { throw Error(`${propertyNow}: ${value} is Wrong!`); }
			}
			cssText += `${propertyNow}: ${value};`;
		} else {
			elm.style[propertyNow] = style[property];
		}
	}
	if (setToCSSText) elm.style.cssText = cssText;
};
