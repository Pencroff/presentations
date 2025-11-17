---
title: "Gradient Descent"
tags:
  - optimization
  - machine-learning
  - gradient-descent
  - neural-networks
  - convex-optimization
  - first-order-methods
  - deep-learning
  - stochastic-optimization
objectives:
  - Define gradient descent and explain its iterative update rule for minimizing differentiable functions
  - Compare and contrast batch, stochastic, and mini-batch gradient descent variants
  - Analyze convergence rates for convex and strongly convex functions
  - Identify failure modes (local minima, saddle points, vanishing gradients) and mitigation strategies
  - Apply advanced optimizers (momentum, RMSprop, Adam) to accelerate convergence
  - Implement gradient descent in Python for regression and neural network training
  - Select appropriate learning rate schedules (decay, warmup, cosine annealing) for stable training
  - Evaluate gradient descent performance using convergence criteria and computational complexity
summary: |
  Gradient descent is a first-order iterative optimization algorithm for finding local minima of differentiable functions by repeatedly taking steps proportional to the negative gradient. It forms the foundation of modern machine learning training, with variants (stochastic, mini-batch, momentum, Adam) that balance computational efficiency, convergence speed, and generalization. The algorithm's performance depends critically on learning rate selection, loss function properties (convexity, smoothness), and initialization.
---

# Topic: Gradient Descent

## TL;DR
- **Core idea**: Move iteratively in the direction of steepest descent (negative gradient) to find function minima
- **Update rule**: $\theta^{(t+1)} = \theta^{(t)} - \eta \nabla_\theta J(\theta^{(t)})$ where $\eta$ is learning rate
- **Variants trade speed vs accuracy**: Batch GD (full data, stable), SGD (single sample, noisy, fast), Mini-batch (compromise)
- **Convergence rates**: Convex smooth $O(1/k)$, strongly convex $O(c^k)$, Nesterov acceleration $O(1/k^2)$
- **Modern optimizers**: Momentum accelerates, RMSprop adapts per-parameter rates, Adam combines both
- **Key formula for gradient**:
  $$\nabla_\theta J(\theta) = \begin{bmatrix} \frac{\partial J}{\partial \theta_1} \\ \vdots \\ \frac{\partial J}{\partial \theta_m} \end{bmatrix}$$

| Concept              | Formula/Rule                                                      | Notes                                      |
| -------------------- | ----------------------------------------------------------------- | ------------------------------------------ |
| Batch GD update      | $\theta^{(t+1)} = \theta^{(t)} - \eta \nabla J(\theta^{(t)})$    | Uses full dataset per iteration            |
| SGD update           | $\theta^{(t+1)} = \theta^{(t)} - \eta \nabla J_i(\theta^{(t)})$  | Uses single sample $i$ per iteration       |
| Momentum             | $v^{(t)} = \beta v^{(t-1)} + \nabla J$; $\theta -= \eta v^{(t)}$ | $\beta \approx 0.9$; accelerates           |
| Adam                 | Uses both first ($m_t$) and second ($v_t$) moments               | $\beta_1=0.9$, $\beta_2=0.999$ typical     |
| Convergence (convex) | $f(\theta^{(k)}) - f(\theta^*) = O(1/k)$                          | For Lipschitz smooth convex $f$            |
| Cost per iteration   | BGD: $O(nd)$; SGD: $O(d)$                                         | $n$ samples, $d$ dimensions                |
| Learning rate decay  | $\eta(t) = \frac{\eta_0}{1 + \text{decay} \cdot t}$              | Prevents oscillation; ensures convergence  |

## 1. Idea / Intuition

**1a.** What it is (plain language):
- Gradient descent finds the "bottom of a bowl" by repeatedly asking "which direction is downhill?" and taking a small step in that direction.
- The gradient $\nabla J(\theta)$ points in the direction where the function $J$ increases most steeply; the negative gradient $-\nabla J(\theta)$ points downhill.

**1b.** Story (geometric):
- Imagine standing on a mountainside in dense fog, trying to reach the valley. You can only measure the slope beneath your feet (the gradient).
- At each step: measure the steepness and direction of the ground, walk downhill a fixed distance (learning rate), repeat until the ground becomes flat (gradient $\approx 0$).
- *Caveat*: You might get stuck in a ravine (local minimum) or on a plateau (saddle point) instead of the true valley (global minimum).

**1c.** Diagram cue:
- *2D contour plot*: Draw concentric elliptical level sets of $J(\theta_1, \theta_2)$. The gradient at any point is a vector perpendicular to the contour line, pointing "uphill." The algorithm traces a path that zigzags toward the center (minimum), with each step perpendicular to the previous gradient direction (for basic GD).
- *3D surface*: A paraboloid bowl where the ball rolls downhill; steeper slopes → larger gradient magnitude → bigger steps (but controlled by learning rate).

**1d.** Cross-domain 1-liners:
- *Physics*: A particle descending a potential energy landscape under overdamped friction.
- *Economics*: Firm adjusting prices/quantities to minimize cost; each adjustment proportional to marginal cost sensitivity.
- *Control theory*: Gradient flow differential equation $\frac{d\theta}{dt} = -\nabla J(\theta)$; GD is Euler discretization.
- *ML/NLP*: Training neural networks, logistic regression, word embeddings—any differentiable loss minimization.

## 2. Formal Definitions

**2a.** Objects and notation:
- $\theta \in \mathbb{R}^m$: parameter vector (weights, coefficients)
- $J: \mathbb{R}^m \to \mathbb{R}$: objective (loss/cost) function to minimize
- $\nabla_\theta J(\theta) = \begin{bmatrix} \frac{\partial J}{\partial \theta_1} & \cdots & \frac{\partial J}{\partial \theta_m} \end{bmatrix}^\top$: gradient vector
- $\eta \in \mathbb{R}_+$ (or $\eta_t$): learning rate (step size) at iteration $t$
- $\theta^{(0)}$: initialization (random or heuristic)
- $\epsilon > 0$: convergence tolerance

**2b.** Primary definition—Batch Gradient Descent (BGD):
$$\theta^{(t+1)} = \theta^{(t)} - \eta_t \nabla_\theta J(\theta^{(t)})$$
- *Iterate*: $t = 0, 1, 2, \ldots$ until convergence (e.g., $\|\nabla J(\theta^{(t)})\| < \epsilon$ or $|J(\theta^{(t)}) - J(\theta^{(t-1)})| < \epsilon$).
- *Assumption*: $J$ is differentiable; gradient computable everywhere.

**2c.** Stochastic Gradient Descent (SGD):
- *Context*: When $J(\theta) = \frac{1}{n}\sum_{i=1}^n J_i(\theta)$ (average over $n$ data points).
- *Update*:
  $$\theta^{(t+1)} = \theta^{(t)} - \eta_t \nabla_\theta J_i(\theta^{(t)})$$
  where $i \in \{1, \ldots, n\}$ is chosen uniformly at random.
- *Intuition*: One data point approximates the full gradient; much faster per iteration ($O(d)$ vs $O(nd)$), but noisier.

**2d.** Mini-batch Gradient Descent (MBGD):
- *Compromise*: Use a random subset (batch) $\mathcal{B} \subset \{1, \ldots, n\}$ of size $b$ ($1 < b < n$):
  $$\theta^{(t+1)} = \theta^{(t)} - \eta_t \frac{1}{b} \sum_{i \in \mathcal{B}} \nabla_\theta J_i(\theta^{(t)})$$
- *Typical $b$*: 32, 64, 128, 256 (powers of 2 for GPU efficiency).

**2e.** Momentum:
- *Accumulate velocity* to smooth out oscillations:
  $$v^{(t)} = \beta v^{(t-1)} + \nabla_\theta J(\theta^{(t-1)})$$
  $$\theta^{(t)} = \theta^{(t-1)} - \eta v^{(t)}$$
- *Parameter*: $\beta \in [0,1)$, typically $0.9$ or $0.99$; larger $\beta$ → more inertia.

**2f.** RMSprop (Root Mean Square Propagation):
- *Adaptive per-parameter learning rates*:
  $$s^{(t)} = \beta_2 s^{(t-1)} + (1 - \beta_2) (\nabla J)^2 \quad \text{(element-wise)}$$
  $$\theta^{(t)} = \theta^{(t-1)} - \frac{\eta}{\sqrt{s^{(t)} + \epsilon}} \odot \nabla J(\theta^{(t-1)})$$
- *Interpretation*: Divide learning rate by RMS of recent gradients; stabilizes directions with large/small gradients.
- *Typical*: $\beta_2 = 0.999$, $\epsilon = 10^{-8}$.

**2g.** Adam (Adaptive Moment Estimation):
- *Combines momentum (first moment $m_t$) and RMSprop (second moment $v_t$)*:
  $$m^{(t)} = \beta_1 m^{(t-1)} + (1-\beta_1)\nabla J$$
  $$v^{(t)} = \beta_2 v^{(t-1)} + (1-\beta_2)(\nabla J)^2$$
  $$\hat{m}^{(t)} = \frac{m^{(t)}}{1 - \beta_1^t}, \quad \hat{v}^{(t)} = \frac{v^{(t)}}{1 - \beta_2^t} \quad \text{(bias correction)}$$
  $$\theta^{(t)} = \theta^{(t-1)} - \frac{\eta}{\sqrt{\hat{v}^{(t)}} + \epsilon} \odot \hat{m}^{(t)}$$
- *Defaults*: $\beta_1=0.9$, $\beta_2=0.999$, $\eta=0.001$, $\epsilon=10^{-8}$.

**2h.** Key theorems and convergence conditions:

**Theorem 1** (GD for smooth convex $J$):
- *Assumptions*: $J$ convex, $\nabla J$ Lipschitz continuous with constant $L$, fixed learning rate $\eta \leq 1/L$.
- *Result*: After $k$ iterations, $J(\theta^{(k)}) - J(\theta^*) \leq \frac{\|\theta^{(0)} - \theta^*\|^2}{2\eta k} = O(1/k)$.

**Theorem 2** (GD for strongly convex $J$):
- *Assumptions*: $J$ $\mu$-strongly convex, $\nabla J$ $L$-Lipschitz, $\eta = 1/L$.
- *Result*: Linear convergence $J(\theta^{(k)}) - J(\theta^*) \leq c^k (J(\theta^{(0)}) - J(\theta^*))$ where $c = 1 - \mu/L < 1$.
- *Interpretation*: Exponentially fast; condition number $\kappa = L/\mu$ determines rate.

**Theorem 3** (SGD convergence):
- *Assumptions*: Convex $J$, learning rate schedule $\sum_{t=1}^\infty \eta_t = \infty$ and $\sum_{t=1}^\infty \eta_t^2 < \infty$ (e.g., $\eta_t = 1/t$).
- *Result*: Converges almost surely to $\theta^*$.
- *Intuition*: First condition allows exploration; second condition ensures steps shrink.

**Theorem 4** (Nesterov Acceleration):
- *Assumptions*: Convex $J$, Lipschitz $\nabla J$.
- *Result*: Accelerated GD achieves $O(1/k^2)$ convergence (vs $O(1/k)$ for standard GD).
- *Method*: "Look-ahead" momentum; compute gradient at extrapolated position.

## 3. Worked Example (minimal, numeric)

**3a.** Problem:
- Minimize $J(\theta) = (\theta - 2)^2$ starting from $\theta^{(0)} = 4$, learning rate $\eta = 0.5$.

**3b.** Steps:

**Iteration 0**:
- $\theta^{(0)} = 4$
- $J(\theta^{(0)}) = (4-2)^2 = 4$
- $\nabla J(\theta^{(0)}) = 2(\theta - 2)\big|_{\theta=4} = 2(4-2) = 4$

**Iteration 1**:
- $\theta^{(1)} = \theta^{(0)} - \eta \nabla J(\theta^{(0)}) = 4 - 0.5 \cdot 4 = 2$
- $J(\theta^{(1)}) = (2-2)^2 = 0$ ✓ (converged in 1 step for quadratic!)

**3c.** Toy example with oscillation (learning rate too large):
- Same problem, $\eta = 1.2$:
- $\theta^{(1)} = 4 - 1.2 \cdot 4 = -0.8$
- $\nabla J(\theta^{(1)}) = 2(-0.8 - 2) = -5.6$
- $\theta^{(2)} = -0.8 - 1.2 \cdot (-5.6) = 5.92$ (overshoots past initial point; diverges)
- *Lesson*: Learning rate must satisfy $\eta < 2/L$ for quadratic $J$ with eigenvalue $L$.

**3d.** Multidimensional example (ridge regression):
- $J(\theta) = \frac{1}{2n}\|X\theta - y\|^2 + \frac{\lambda}{2}\|\theta\|^2$
- Gradient: $\nabla_\theta J = \frac{1}{n}X^\top(X\theta - y) + \lambda\theta$
- Update: $\theta^{(t+1)} = \theta^{(t)} - \eta\left(\frac{1}{n}X^\top(X\theta^{(t)} - y) + \lambda\theta^{(t)}\right)$

**3e.** Assumptions callouts:
- *Differentiability*: $J$ must be differentiable at $\theta^{(t)}$ to compute gradient (used in every iteration).
- *Lipschitz smoothness*: Bounds gradient change; ensures $\eta$ choice yields descent (used in convergence proofs).
- *Convexity*: Guarantees global optimum reachable; without it, local minima may trap algorithm (affects stopping guarantee).

## 4. Edge Cases vs Failure Modes & Pitfalls

### Edge Cases (boundary/degenerate behavior)

**4a.** Flat regions ($\nabla J \approx 0$ but not at minimum):
- *Behavior*: Algorithm stalls; updates $\approx 0$.
- *Example*: Plateaus in neural networks (e.g., saturated sigmoid: $\sigma(z) \approx 1 \Rightarrow \sigma'(z) \approx 0$).
- *Stable alternative*: Use ReLU or other non-saturating activations; add gradient noise; restart with different initialization.

**4b.** Saddle points (gradient $= 0$, neither min nor max):
- *Behavior*: Convergence slows dramatically near saddle; Hessian has mixed signs (negative and positive eigenvalues).
- *Detection*: Check Hessian eigenvalues; if gradient small but loss not decreasing, likely saddle.
- *Mitigation*: SGD noise helps escape; second-order methods (Newton) or Nesterov momentum; trust-region methods.

**4c.** Near-singular Hessian (ill-conditioned problems):
- *Issue*: Large condition number $\kappa = \lambda_{\max}/\lambda_{\min}$ causes zigzag; slow convergence.
- *Example*: Ridge regression with poorly scaled features ($X$ has widely varying column norms).
- *Stable alternative*: Precondition by scaling features (standardization); use adaptive methods (Adam, RMSprop); or conjugate gradient.

**4d.** Very small learning rate:
- *Behavior*: Convergence provably guaranteed (if $\eta < 1/L$) but painfully slow; many iterations needed.
- *Trade-off*: Safety vs speed.
- *Heuristic*: Start with $\eta = 0.001$ or $0.01$; use learning rate finder (increase $\eta$ until loss diverges, then back off).

**4e.** Very large learning rate:
- *Behavior*: Overshoots minimum, oscillates wildly, or diverges ($J(\theta^{(t)}) \to \infty$).
- *Detection*: Loss increases or NaNs appear.
- *Fix*: Reduce $\eta$ by factor of 10; use learning rate warmup; gradient clipping.

### Failure Modes (in practice)

**4f.** Local minima (non-convex loss):
- *Mode*: Algorithm converges to suboptimal $\theta$ where $\nabla J = 0$ but $J(\theta) > J(\theta^*)$.
- *Signal*: Loss plateaus above known achievable values; different initializations yield different final losses.
- *Mitigation*: Multiple random restarts; stochastic methods (SGD noise escapes shallow minima); simulated annealing; better initialization (Xavier, He).

**4g.** Vanishing gradients (deep networks):
- *Mode*: In deep networks, $\frac{\partial J}{\partial \theta_{\text{early layers}}} \to 0$ due to repeated multiplication by small derivatives.
- *Signal*: Early layers' weights barely change; loss decreases for shallow layers but not deep ones.
- *Detection*: Monitor gradient norms per layer; plot gradient histograms.
- *Mitigation*: Use ReLU/Leaky ReLU; batch normalization; skip connections (ResNets); gradient clipping; better weight initialization (He/Xavier).

**4h.** Exploding gradients (RNNs, deep networks):
- *Mode*: Gradients grow exponentially; updates cause $\|\theta\|$ or loss to blow up.
- *Signal*: Loss becomes NaN or Inf; weights diverge.
- *Detection*: Monitor $\|\nabla J\|$; if $> 10^3$, suspect explosion.
- *Mitigation*: Gradient clipping ($\|\nabla J\| > \text{threshold} \Rightarrow$ rescale to threshold); lower learning rate; batch normalization; LSTMs/GRUs (for RNNs).

**4i.** Poor initialization:
- *Mode*: Starting far from $\theta^*$ or in flat region → slow convergence or getting stuck.
- *Signal*: High initial loss that barely decreases.
- *Mitigation*: Use Xavier (Glorot) initialization: $\theta \sim \mathcal{N}(0, 2/(n_{\text{in}}+n_{\text{out}}))$ for layers; He initialization for ReLU: $\theta \sim \mathcal{N}(0, 2/n_{\text{in}})$; warm restarts; transfer learning.

**4j.** Non-differentiable points (kinks):
- *Mode*: $\nabla J$ undefined (e.g., ReLU at 0, $|x|$ at 0, hinge loss at margin).
- *Behavior*: Subgradient exists; practical implementations use left/right derivative arbitrarily.
- *Mitigation*: Use subgradient methods; smooth approximations (e.g., $\log(1+e^x)$ for hinge); proximal gradient methods.

**4k.** Batch size effects:
- *Small batch* ($b=1$, SGD): High variance gradients; noisy but explores well; may escape local minima; slower wall-clock time per epoch.
- *Large batch* ($b=n$, BGD): Low variance; stable but may converge to sharp minima (poor generalization); expensive per iteration.
- *Rule of thumb*: $b \in [32, 256]$; scale learning rate with batch size (linear scaling rule: $\eta \propto b$).

## 5. Equivalent Views or Representations

**5a.** Geometric (steepest descent):
- GD chooses the direction $-\nabla J$ because it solves: $\min_{\|d\|=1} \nabla J^\top d = -\|\nabla J\|$ (steepest descent direction).
- Interpretation: Among all unit-norm directions, negative gradient decreases $J$ fastest (first-order approximation).

**5b.** Analytical (Euler method for gradient flow ODE):
- Gradient flow: $\frac{d\theta(t)}{dt} = -\nabla J(\theta(t))$, $\theta(0) = \theta_{\text{init}}$.
- GD is forward Euler discretization with step size $\eta$: $\frac{\theta^{(t+1)} - \theta^{(t)}}{\eta} \approx -\nabla J(\theta^{(t)})$.
- Interpretation: GD approximates continuous gradient flow; smaller $\eta \Rightarrow$ better approximation but more steps.

**5c.** Probabilistic/Bayesian (Langevin dynamics):
- Stochastic GD with noise: $\theta^{(t+1)} = \theta^{(t)} - \eta \nabla J(\theta^{(t)}) + \sqrt{2\eta T}\xi^{(t)}$, $\xi \sim \mathcal{N}(0, I)$.
- At equilibrium, samples $\theta \sim e^{-J(\theta)/T}$ (Gibbs distribution with temperature $T$).
- Interpretation: SGD noise acts like temperature; helps explore and escape local minima.

**5d.** Matrix/operator form (for quadratic $J$):
- $J(\theta) = \frac{1}{2}\theta^\top A\theta - b^\top\theta + c$, $\nabla J = A\theta - b$.
- Update: $\theta^{(t+1)} = \theta^{(t)} - \eta(A\theta^{(t)} - b) = (I - \eta A)\theta^{(t)} + \eta b$.
- Interpretation: Fixed-point iteration; converges if $\|I - \eta A\| < 1$ (eigenvalues of $\eta A$ in $(0,2)$).

**5e.** Control-theoretic (optimal control):
- System: $\frac{d\theta}{dt} = u(t)$; cost: $\int_0^\infty J(\theta(t))dt$.
- Optimal feedback control: $u^*(t) = -\nabla J(\theta(t))$ (gradient descent emerges as optimal policy).

**5f.** Online learning / regret minimization:
- SGD minimizes cumulative regret: $\sum_{t=1}^T J_t(\theta^{(t)}) - \min_\theta \sum_{t=1}^T J_t(\theta)$.
- Interpretation: Sequential decision-making; no-regret algorithms in game theory.

## 6. Properties & Relationships

### Invariants, monotonicity, convexity

**6a.** Monotonic descent (with suitable $\eta$):
- If $\eta \leq 1/L$ (Lipschitz constant) and $J$ smooth, then $J(\theta^{(t+1)}) \leq J(\theta^{(t)})$ always.
- *Proof sketch*: Taylor expansion $J(\theta - \eta \nabla J) \approx J(\theta) - \eta \|\nabla J\|^2 + \frac{L\eta^2}{2}\|\nabla J\|^2$; choosing $\eta \leq 1/L$ ensures descent.

**6b.** Convexity guarantees global optimum:
- If $J$ convex, any local minimum is global; GD converges to $\theta^*$ (with appropriate $\eta$, conditions).
- If $J$ non-convex, GD may converge to local minimum or saddle; no global optimality guarantee.

**6c.** Bounds and sensitivity:
- *Lipschitz gradient*: $\|\nabla J(\theta_1) - \nabla J(\theta_2)\| \leq L\|\theta_1 - \theta_2\|$.
  - Implication: Gradient doesn't change too abruptly; allows safe step sizes.
- *Strong convexity*: $J(\theta_2) \geq J(\theta_1) + \nabla J(\theta_1)^\top(\theta_2-\theta_1) + \frac{\mu}{2}\|\theta_2-\theta_1\|^2$.
  - Implication: $J$ has curvature bounded below; linear convergence.

### Complexity

**6d.** Time complexity per iteration:
- *Batch GD*: $O(nd)$ for gradient computation (sum over $n$ samples, each $d$-dimensional).
- *SGD*: $O(d)$ (single sample).
- *Mini-batch GD*: $O(bd)$ for batch size $b$.
- *Note*: Modern hardware (GPUs) parallelizes batch operations; wall-clock time depends on $b$ and memory bandwidth.

**6e.** Space complexity:
- $O(m)$ for parameters $\theta \in \mathbb{R}^m$.
- Momentum/Adam: Additional $O(m)$ for velocity/moment buffers.
- Full Hessian methods (Newton): $O(m^2)$; impractical for large $m$.

**6f.** Iteration complexity (to $\epsilon$-accuracy):
- *Convex smooth*: $O(1/\epsilon)$ iterations (GD).
- *Strongly convex*: $O(\kappa \log(1/\epsilon))$ iterations where $\kappa = L/\mu$ is condition number.
- *Nesterov acceleration*: $O(1/\sqrt{\epsilon})$ iterations (optimal for first-order methods).
- *SGD*: Depends on noise variance; typically $O(1/\epsilon^2)$ without strong convexity.

**6g.** Scaling with problem parameters:
- High-dimensional $m$: GD scales well (linear memory, first-order).
- Large datasets $n$: SGD/mini-batch essential (BGD impractical).
- Ill-conditioned ($\kappa \gg 1$): Slow convergence; preconditioning or second-order methods (L-BFGS) help.

### Related concepts

**6h.** Similar methods:
- **Coordinate descent**: Optimize one $\theta_i$ at a time (useful for non-smooth penalties).
- **Proximal gradient**: Handles non-smooth regularizers (e.g., $\ell_1$: $\theta^{(t+1)} = \text{prox}_{\eta \lambda \|\cdot\|_1}(\theta^{(t)} - \eta \nabla f(\theta^{(t)}))$).
- **Subgradient method**: Generalization to non-differentiable $J$; uses any subgradient.

**6i.** Contrasting methods:
- **Newton's method**: Uses Hessian $\nabla^2 J$; update $\theta^{(t+1)} = \theta^{(t)} - (\nabla^2 J)^{-1}\nabla J$; quadratic convergence but $O(m^3)$ per step.
  - *Trade-off*: Fewer iterations, much higher per-iteration cost.
- **Conjugate gradient**: Uses conjugate directions; $O(\sqrt{\kappa})$ iteration complexity for quadratics; no Hessian inversion.
- **L-BFGS**: Quasi-Newton with limited memory; approximates Hessian; good for moderate $m$, smooth $J$.

**6j.** When to prefer GD:
- Large $m$ (high-dimensional): First-order methods only option.
- Large $n$: Stochastic/mini-batch variants essential.
- Non-smooth or noisy objectives: Subgradient or SGD.
- Deep learning: SGD/Adam dominant due to scale and non-convexity.

## 7. Applications & Units (cross-domain)

### ML/NLP/IR/CV

**7a.** Training neural networks:
- *Task*: Minimize cross-entropy loss $J(\theta) = -\frac{1}{n}\sum_{i=1}^n y_i \log \hat{y}_i(\theta)$ over network weights $\theta$.
- *Method*: Backpropagation computes $\nabla_\theta J$; SGD/Adam updates $\theta$.
- *Scale*: Billions of parameters (GPT-3: 175B); mini-batch GD with $b=32$–$2048$, learning rate schedules (warmup + decay).

**7b.** Logistic regression (classification):
- *Loss*: $J(\theta) = \frac{1}{n}\sum_{i=1}^n \log(1 + e^{-y_i \theta^\top x_i})$ (binary classification).
- *Gradient*: $\nabla_\theta J = -\frac{1}{n}\sum_{i=1}^n \frac{y_i x_i}{1 + e^{y_i \theta^\top x_i}}$.
- *Typical*: BGD for small $n$, SGD for large $n$; $\eta \approx 0.01$–$1$.

**7c.** Word embeddings (Word2Vec, GloVe):
- *Objective*: Minimize skipgram loss $J = -\sum \log P(w_{\text{context}} | w_{\text{center}}; \theta)$.
- *Method*: SGD over word pairs; negative sampling for efficiency.
- *Hyperparameters*: $\eta = 0.025$ initially, decay to $0.0001$; $50$–$300$ dimensions.

**7d.** Transformer training (BERT, GPT):
- *Pre-training*: Maximize likelihood $\sum \log P(\text{next token} | \text{context}; \theta)$ using gradient-based optimization.
- *Optimizer*: Adam with $\beta_1=0.9$, $\beta_2=0.999$, warmup over 4k–10k steps, then linear decay.
- *Learning rate*: Peak $\eta \approx 10^{-4}$–$10^{-3}$ for large models; smaller for fine-tuning.
- *Importance*: Gradient flow in 12–96 layers; skip connections and LayerNorm mitigate vanishing gradients.

**7e.** Recommender systems (matrix factorization):
- *Loss*: $J(U,V) = \sum_{(i,j) \in \text{observed}} (R_{ij} - U_i^\top V_j)^2 + \text{regularization}$.
- *Method*: Alternating GD over $U$, $V$ or joint SGD.

### Physics

**7f.** Energy minimization:
- *Quantity*: Potential energy $E(\mathbf{x})$ of particle configuration $\mathbf{x}$ (units: Joules).
- *Method*: GD update $\mathbf{x}^{(t+1)} = \mathbf{x}^{(t)} - \eta \nabla E(\mathbf{x}^{(t)})$ finds stable equilibrium (local minimum).
- *Example*: Molecular dynamics force field minimization; $\eta$ tuned empirically or via line search.

**7g.** Quantum state optimization (variational quantum algorithms):
- *Objective*: Minimize expectation $J(\theta) = \langle \psi(\theta) | H | \psi(\theta) \rangle$ (Hamiltonian $H$).
- *Method*: Parameter-shift rule computes gradients of quantum circuit; classical GD updates $\theta$.

### Economics

**7h.** Cost minimization:
- *Objective*: Firm's cost function $C(q, w)$ (output $q$, input prices $w$).
- *Marginal analysis*: $\nabla_q C$ is marginal cost; GD-like adjustment: produce more if $\nabla_q C < p$ (price).
- *Units*: $C$ in dollars, $q$ in units produced, $\eta$ is adjustment speed (dimensionless or per time period).

**7i.** Utility maximization:
- *Objective*: Maximize utility $U(x_1, \ldots, x_n)$ subject to budget.
- *Method*: Gradient ascent on utility (or descent on $-U$); Lagrangian methods common.

### Engineering

**7j.** Control system tuning:
- *Objective*: Minimize tracking error $J = \int (y(t) - r(t))^2 dt$ over controller parameters $\theta$.
- *Method*: Compute $\nabla_\theta J$ via sensitivity analysis or simulation; GD tunes PID gains, etc.
- *Units*: Error in meters/volts; $\theta$ (gains) dimensionless or in Hz; $\eta$ tuned by stability margins.

**7k.** Signal processing (filter design):
- *Objective*: Minimize mean-squared error $J(\mathbf{h}) = \mathbb{E}[(y - \mathbf{h}^\top \mathbf{x})^2]$ for filter coefficients $\mathbf{h}$.
- *Method*: LMS (Least Mean Squares) algorithm is SGD: $\mathbf{h}^{(t+1)} = \mathbf{h}^{(t)} + \eta (y^{(t)} - \mathbf{h}^{(t)\top}\mathbf{x}^{(t)})\mathbf{x}^{(t)}$.

## 8. Evaluation & Metrics (convergence criteria)

**8a.** Metrics for convergence:

**8a.1.** Gradient norm:
- $\|\nabla_\theta J(\theta^{(t)})\| < \epsilon_{\text{grad}}$ (e.g., $10^{-6}$)
- *Assumption*: At minimum, $\nabla J = 0$.
- *Caveat*: Saddle points also have $\nabla J = 0$; check Hessian or loss decrease.

**8a.2.** Parameter change:
- $\|\theta^{(t)} - \theta^{(t-1)}\| < \epsilon_{\theta}$
- *Interpretation*: Updates become negligible; algorithm stabilized.
- *Caveat*: May stop prematurely if learning rate too small or in flat region.

**8a.3.** Loss change:
- $|J(\theta^{(t)}) - J(\theta^{(t-1)})| < \epsilon_{J}$
- *Interpretation*: Objective not improving further.
- *Preferred in practice*: Directly measures optimization goal.

**8a.4.** Fixed iteration budget:
- Stop after $T$ iterations or $T$ gradient evaluations.
- *Typical in ML*: Early stopping based on validation loss; $T$ chosen empirically.

**8b.** Protocol for experiments:

**8b.1.** Data splits:
- Train set: Run GD to minimize $J_{\text{train}}(\theta)$.
- Validation set: Monitor $J_{\text{val}}(\theta^{(t)})$; stop when it stops decreasing (early stopping).
- Test set: Final evaluation on $J_{\text{test}}(\theta^*)$ (report once).

**8b.2.** Learning rate tuning:
- *Grid search*: Try $\eta \in \{0.001, 0.01, 0.1, 1\}$; pick best validation loss.
- *Learning rate finder*: Increase $\eta$ exponentially; plot loss vs $\eta$; choose $\eta$ just before divergence.
- *Schedule*: Decay over time (step decay, exponential, cosine annealing).

**8b.3.** Reproducibility:
- Fix random seed for initialization and data shuffling (SGD).
- Report: optimizer (SGD/Adam), $\eta$, batch size $b$, number of epochs, hardware (GPU type).
- Log: loss curves, gradient norms, wall-clock time.

**8b.4.** Significance:
- Run multiple seeds ($5$–$10$); report mean $\pm$ std of final loss.
- Statistical tests (paired $t$-test) to compare optimizers.

**8c.** Metric traps and how to avoid:

**8c.1.** Train-test discrepancy:
- *Trap*: Low $J_{\text{train}}$ but high $J_{\text{test}}$ (overfitting).
- *Avoid*: Regularization ($\ell_2$, dropout), early stopping, cross-validation.

**8c.2.** Gradient norm in non-convex problems:
- *Trap*: $\|\nabla J\| \approx 0$ at saddle point, not minimum.
- *Avoid*: Check loss decrease; use second-order info (Hessian eigenvalues) or trust convergence to "good enough" solution.

**8c.3.** Batch size effects on convergence:
- *Trap*: Large batch → sharp minima (poor generalization) even if loss low.
- *Avoid*: Moderate batch sizes ($32$–$256$); noise in SGD acts as implicit regularization.

**8c.4.** Learning rate schedule:
- *Trap*: Aggressive decay → premature convergence; too slow decay → oscillation.
- *Avoid*: Use warmup for first few epochs; monitor validation loss; adjust schedule based on plateaus.

## 9. Study Tips or Heuristics

**9a.** Mnemonics:
- **"Down the gradient, up the hill"**: Gradient points uphill; negative gradient points downhill; GD goes downhill.
- **"Small steps on steep slopes"**: Large gradient magnitude → big step (scaled by $\eta$); learning rate controls absolute step size.
- **"SGD: cheap and noisy, BGD: expensive and smooth"**: SGD trades computation for variance.

**9b.** Quick derivation route:
1. Write loss $J(\theta)$.
2. Compute partial derivatives $\frac{\partial J}{\partial \theta_i}$ for each parameter.
3. Assemble gradient vector $\nabla_\theta J$.
4. Update: $\theta := \theta - \eta \nabla_\theta J$.

**9c.** Common confusions:
- **Gradient vs. loss**: Gradient is a vector (direction); loss is a scalar (how bad).
- **Learning rate vs. gradient magnitude**: Learning rate $\eta$ is hyperparameter (fixed or scheduled); gradient $\nabla J$ varies each iteration.
- **Epoch vs. iteration**: Epoch = one pass through full dataset; iteration = one parameter update (for SGD: $n$ iterations per epoch).
- **Momentum vs. acceleration**: Momentum smooths updates (exponential moving average); Nesterov acceleration uses "look-ahead" gradient.

**9d.** Sanity checks:
- **Loss should decrease**: If $J(\theta^{(t+1)}) > J(\theta^{(t)})$ consistently, learning rate too large or bug in gradient.
- **Gradient magnitude**: Should decrease toward 0 near convergence. If stuck at high value, check for plateau/saddle.
- **Parameter scale**: If $\|\theta\|$ grows unbounded, likely divergence or exploding gradient.
- **Simple case**: For $J(\theta) = \theta^2$, $\theta^* = 0$; GD with $\eta < 1$ should converge. Test your implementation here first.

**9e.** Choosing learning rate $\eta$:
1. Start with $0.01$ or $0.001$ (common defaults).
2. If loss doesn't decrease after $10$ iterations, try $0.1\eta$ or $0.01\eta$.
3. If loss oscillates wildly, reduce $\eta$.
4. If convergence very slow, increase $\eta$ cautiously (monitor for divergence).
5. Use adaptive methods (Adam) to avoid manual tuning.

**9f.** Debugging checklist:
- Loss = NaN → gradient explosion (clip gradients, lower $\eta$).
- Loss stuck → saddle/plateau (add noise, try SGD, check initialization).
- Loss increasing → $\eta$ too large or wrong gradient sign (check $-\nabla J$, not $+\nabla J$).
- Gradient vanishing → check activations (use ReLU), batch norm, skip connections.

## 10. References (prioritized)

### Links
- MIT 6.390 Course Notes: https://introml.mit.edu/notes/gradient_descent.html
- Wikipedia – Gradient Descent: https://en.wikipedia.org/wiki/Gradient_descent
- Stanford CS229 Lecture Notes: http://cs229.stanford.edu/notes/
- Sebastian Ruder's Blog – "An overview of gradient descent optimization algorithms": https://ruder.io/optimizing-gradient-descent/
- DigitalOcean Tutorial on Momentum, RMSprop, Adam: https://www.digitalocean.com/community/tutorials/intro-to-optimization-momentum-rmsprop-adam

### Textbooks
- Boyd & Vandenberghe, *Convex Optimization* (2004), Chapter 9: Unconstrained minimization
- Goodfellow, Bengio & Courville, *Deep Learning* (2016), Chapter 8: Optimization for Training Deep Models
- Nocedal & Wright, *Numerical Optimization* (2006), Chapters 2–3: Line search and trust region methods
- Sra, Nowozin & Wright (Eds.), *Optimization for Machine Learning* (2012), various chapters on first-order methods

### Papers
- Cauchy, A.-L. (1847). "Méthode générale pour la résolution des systèmes d'équations simultanées." (Original gradient descent proposal)
- Rumelhart, Hinton & Williams (1986). "Learning representations by back-propagating errors." *Nature*, 323(6088):533–536. (Backpropagation + GD for neural nets)
- Kingma & Ba (2017). "Adam: A Method for Stochastic Optimization." *ICLR*. arXiv:1412.6980 (Adam optimizer)
- Nesterov, Y. (2004). *Introductory Lectures on Convex Optimization: A Basic Course*. (Accelerated gradient methods)
- Bottou, L. (2010). "Large-scale machine learning with stochastic gradient descent." *COMPSTAT*. (SGD practical guide)

### Keywords for search
- Gradient descent, stochastic gradient descent (SGD), mini-batch GD
- Momentum, Nesterov acceleration, heavy ball method
- Adam optimizer, RMSprop, AdaGrad
- Convex optimization, first-order methods
- Learning rate schedule, learning rate decay, warmup
- Backpropagation, automatic differentiation
- Convergence analysis, Lipschitz continuity, strong convexity
- Saddle points, vanishing gradients, exploding gradients
