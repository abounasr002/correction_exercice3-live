import express from "express"
import { login, register } from "../controllers/AuthController";

const router = express.Router()
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Enregistre un nouvel utilisateur
 *     description: Crée un utilisateur avec un email, un mot de passe et un nom
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Champs obligatoires manquants ou utilisateur existant
 */
router.post('/register', register)
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connecte un utilisateur
 *     description: Vérifie les identifiants de connexion et génère un token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       400:
 *         description: Champs obligatoires manquants
 *       401:
 *         description: Mot de passe invalide
 *       404:
 *         description: Utilisateur non trouvé
 */

router.post('/login', login)

export default router;