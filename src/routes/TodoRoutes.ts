import express from "express";
import { createTodo, getAllFalses, getAllFromUser, getAllTodos, modifyTodo } from "../controllers/TodoController";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware";

const router = express.Router();

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Créer une nouvelle todo
 *     description: Crée une nouvelle tâche todo. Nécessite une authentification.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *                 description: Tâche à réaliser
 *                 example: "Apprendre Swagger"
 *               isCompleted:
 *                 type: boolean
 *                 description: Statut de la tâche (complétée ou non)
 *                 example: false
 *     responses:
 *       201:
 *         description: Todo créée avec succès
 *       400:
 *         description: Erreur lors de la création de la todo
 */
router.post('/', verifyTokenMiddleware, createTodo);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Récupérer toutes les todos
 *     description: Récupère toutes les tâches todo de l'utilisateur connecté.
 *     responses:
 *       200:
 *         description: Liste de toutes les todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la todo
 *                     example: 1
 *                   task:
 *                     type: string
 *                     description: La tâche à accomplir
 *                     example: "Apprendre Swagger"
 *                   isCompleted:
 *                     type: boolean
 *                     description: Statut de la tâche (complétée ou non)
 *                     example: false
 *       401:
 *         description: Utilisateur non autorisé
 */
router.get('/', verifyTokenMiddleware, getAllTodos);

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Modifier une todo
 *     description: Modifie une tâche todo existante. Nécessite une authentification et l'ID de la todo.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de la todo à modifier
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *                 description: Tâche à modifier
 *                 example: "Apprendre Node.js"
 *               isCompleted:
 *                 type: boolean
 *                 description: Statut de la tâche (complétée ou non)
 *                 example: true
 *     responses:
 *       200:
 *         description: Todo modifiée avec succès
 *       400:
 *         description: Erreur lors de la modification de la todo
 *       404:
 *         description: Todo non trouvée
 */
router.put('/:id', verifyTokenMiddleware, modifyTodo);

/**
 * @swagger
 * /todos/false:
 *   get:
 *     summary: Récupérer les todos non complétées
 *     description: Récupère uniquement les tâches todo qui ne sont pas encore complétées.
 *     responses:
 *       200:
 *         description: Liste des todos non complétées
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la todo
 *                     example: 1
 *                   task:
 *                     type: string
 *                     description: La tâche à accomplir
 *                     example: "Apprendre Swagger"
 *                   isCompleted:
 *                     type: boolean
 *                     description: Statut de la tâche (complétée ou non)
 *                     example: false
 */
router.get('/false', verifyTokenMiddleware, getAllFalses);

/**
 * @swagger
 * /todos/fromUser:
 *   get:
 *     summary: Récupérer les todos d'un utilisateur spécifique
 *     description: Récupère les tâches todo uniquement pour un utilisateur spécifique connecté.
 *     responses:
 *       200:
 *         description: Liste des todos de l'utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la todo
 *                     example: 1
 *                   task:
 *                     type: string
 *                     description: La tâche à accomplir
 *                     example: "Apprendre Node.js"
 *                   isCompleted:
 *                     type: boolean
 *                     description: Statut de la tâche (complétée ou non)
 *                     example: false
 */
router.get('/fromUser', verifyTokenMiddleware, getAllFromUser);

export default router;
