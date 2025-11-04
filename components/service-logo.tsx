interface ServiceLogoProps {
  serviceName: string
  backgroundColor: string
  textColor: string
  size?: "sm" | "md" | "lg"
}

export default function ServiceLogo({ serviceName, backgroundColor, textColor, size = "md" }: ServiceLogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-xs",
    md: "w-20 h-20 text-sm",
    lg: "w-32 h-32 text-2xl",
  }

  const getLogoInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div
      className={`${sizeClasses[size]} ${backgroundColor} ${textColor} rounded-2xl flex items-center justify-center font-bold shadow-lg transition-transform hover:scale-110`}
    >
      <div className="text-center">
        <div className="font-black tracking-tight">{getLogoInitials(serviceName)}</div>
        <div className="text-xs opacity-80 mt-1">{serviceName.split(" ")[0]}</div>
      </div>
    </div>
  )
}
