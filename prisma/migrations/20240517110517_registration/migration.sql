-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('pending', 'ok');

-- CreateEnum
CREATE TYPE "Operator" AS ENUM ('TELMA', 'AIRTEL', 'ORANGE');

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "projectName" TEXT NOT NULL,
    "paymentReference" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "paymentType" "Operator" NOT NULL,
    "status" "RegistrationStatus" NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
