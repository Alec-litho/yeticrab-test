-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PLANNED', 'VISITED');

-- CreateTable
CREATE TABLE "attractions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "addedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" INTEGER NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lat" DECIMAL(10,6) NOT NULL,
    "lng" DECIMAL(10,6) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PLANNED',

    CONSTRAINT "attractions_pkey" PRIMARY KEY ("id")
);
